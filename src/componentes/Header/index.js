import Logo from "../logo";
import OptionsHeader from "../OpcoesHeader";
import IconesHeader from "../iconesHeader";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: #fff;
  display: flex;
  justify-content: center;
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo />
      <OptionsHeader />
      <IconesHeader />
    </HeaderContainer>
  );
}

export default Header;
