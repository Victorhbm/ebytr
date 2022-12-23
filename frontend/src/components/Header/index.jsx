import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import { Button, ButtonContainer, Paragraph, StyledHeader, Title } from "./style";
import { MdLogout } from "react-icons/md"

function Header() {
  const { userData: { name }, setUserData } = useContext(AppContext);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    setUserData({});
    navigate('/login');
  };

  return (
    <StyledHeader>
      <Title>To-do List</Title>
      <ButtonContainer>
        <Paragraph>{ name }</Paragraph>
        <Button type="button" onClick={ logout }>
          <MdLogout />
        </Button>
      </ButtonContainer>
    </StyledHeader>
  )
}

export default Header;