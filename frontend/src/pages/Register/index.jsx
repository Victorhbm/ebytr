import { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ErrorMessage from "../../components/ErrorMessage";
import AppContext from "../../context/AppContext";
import { createUser } from "../../services/apiRequests";
import { Button, FormContainer, ImgContainer, Input, Label, PageContainer, Section, StyledLink, Title } from "./style";
import { ReactComponent as ChecklistImg } from '../../assets/images/checklist.svg';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const { setUserData, setIsLogged } = useContext(AppContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { message, user, token } = await createUser({ name, email, password });

    if (message) {
      setErrorMessage(message);
    } else {
      const userData = { ...user, token };
      
      localStorage.setItem('user', JSON.stringify(userData));
      setUserData(userData);
      
      setIsLogged(true);
      setErrorMessage('');
      setName('');
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
          <Title>Register</Title>
          <form onSubmit={ (e) => handleSubmit(e) }>
            <Label htmlFor="input-name-register">
              Name:
              <Input
                type="text"
                id="input-name-register"
                name="input-name-register"
                onChange={ (e) => setName(e.target.value) }
                value={ name }
              />
            </Label>
            <Label htmlFor="input-email-register">
              Email:
              <Input
                type="email"
                id="input-email-register"
                name="input-email-register"
                onChange={ (e) => setEmail(e.target.value) }
                value={ email }
              />
            </Label>
            <Label htmlFor="input-password-register">
              Password:
              <Input
                type="password"
                id="input-password-register"
                name="input-password-register"
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
            Already have an account? <StyledLink to="/login">Log In</StyledLink>
          </p>
        </FormContainer>
      </Section>
    </PageContainer>
  );
}

export default Register;