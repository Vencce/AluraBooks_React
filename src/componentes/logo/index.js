import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const AppLogo = styled.div`
    display: flex;
    font-size: 30px;
`;

const AppLogoImagem = styled.img`
    margin-right: 10px;
`;

function Logo() {
    return (
        <AppLogo>
            <AppLogoImagem src={logo} alt="logo" />
            <p>
                <strong>Alura</strong>Books
            </p>
        </AppLogo>
    );
}

export default Logo;