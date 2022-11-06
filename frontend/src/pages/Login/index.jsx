import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as ChecklistImg } from '../../assets/images/checklist.svg';
import ErrorMessage from "../../components/ErrorMessage";
import AppContext from "../../context/AppContext";
import { login } from "../../services/apiRequests";
import { Button, FormContainer, ImgContainer, Input, Label, PageContainer, Section, StyledLink, Title } from "./style";

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
    <PageContainer>
      <Section>
        <ImgContainer>
          <ChecklistImg />
        </ImgContainer>
        <FormContainer>
          <Title>Login</Title>
          <form onSubmit={ (e) => handleSubmit(e) }>
            <Label htmlFor="input-email-login">
              Email:
              <Input
                type="email"
                id="input-email-login"
                name="input-email-login"
                onChange={ (e) => setEmail(e.target.value) }
                value={ email }
              />
            </Label>
            <Label htmlFor="input-password-login">
              Password:
              <Input
                type="password"
                id="input-password-login"
                name="input-password-login"
                onChange={ (e) => setPassword(e.target.value) }
                value={ password }
              />
            </Label>
            <Button
              type="submit"
            >
              Submit
            </Button>
          </form>
          <ErrorMessage message={ errorMessage } />
          <p>
            Don&apos;t have an account? <StyledLink to="/register">Sign Up</StyledLink>
          </p>
        </FormContainer>
      </Section>
    </PageContainer>
  );
}

export default Login;