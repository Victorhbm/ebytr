import { useContext, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import ErrorMessage from "../components/ErrorMessage";
import AppContext from "../context/AppContext";
import { login } from "../services/apiRequests";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserData, setIsLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, user, token } = await login({ email, password });

    if (message) {
      setErrorMessage(message);
    } else {
      const userData = { ...user, token };

      localStorage.setItem('user', JSON.stringify(userData));
      setUserData(userData);
      
      setIsLogged(true);
      setErrorMessage('');
      setEmail('');
      setPassword('');
      navigate('/');
    }
  }

  return (
    <div className="bg-accent h-screen text-base-100 flex justify-center items-center text-base	">
      <section className="w-80 p-3">
        <h1 className="text-center text-2xl mb-4">Log In</h1>
        <form onSubmit={ (e) => handleSubmit(e) }>
          <label htmlFor="input-email-login" className="block mb-2">
            Email:
            <input
              type="email"
              id="input-email-login"
              name="input-email-login"
              onChange={ (e) => setEmail(e.target.value) }
              value={ email }
              className="block w-full border-slate-500 rounded-md bg-accent input input-bordered input-sm mt-0.4"
            /> 
          </label>
          <label htmlFor="input-password-login" className="block">
            Password:
            <input
              type="password"
              id="input-password-login"
              name="input-password-login"
              onChange={ (e) => setPassword(e.target.value) }
              value={ password }
              className="block w-full border-slate-500 rounded-md bg-accent input input-bordered input-sm mt-0.4"
            />
          </label>
          <button
            type="submit"
            className="w-full btn-primary btn-sm rounded-md my-5"
          >
            Submit
          </button>
        </form>
        <ErrorMessage message={ errorMessage } />
        <p>Don&apos;t have an account? <Link to="/register">Sign Up</Link></p>
      </section>
    </div>
  );
}

export default Login;