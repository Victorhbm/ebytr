import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import AppContext from "../context/AppContext";
import { login } from "../services/apiRequests";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, user, token } = await login({ email, password });

    if (message) {
      setErrorMessage(message);
    } else {
      setErrorMessage('');
      localStorage.setItem('user', JSON.stringify({
        data: user,
        token
      }));

      setUserData({
        data: user,
        token
      })
      console.log('entrou');
      navigate('/');
      setEmail('');
      setPassword('');
    }
  }

  return (
    <div>
      <form onSubmit={ (e) => handleSubmit(e) }>
        <label htmlFor="input-email-login">
          Email:
          <input
            type="email"
            id="input-email-login"
            name="input-email-login"
            onChange={ (e) => setEmail(e.target.value) }
            value={ email }
          />
        </label>

        <label htmlFor="input-password-login">
          Password:
          <input
            type="password"
            id="input-password-login"
            name="input-password-login"
            onChange={ (e) => setPassword(e.target.value) }
            value={ password }
          />
        </label>

        <button
          type="submit"
        >
          Send
        </button>
      </form>

      <ErrorMessage message={ errorMessage } />

      <p>Don&apos;t have an account? <Link to="/register">Sign Up</Link></p>
    </div>
  );
}

export default Login;