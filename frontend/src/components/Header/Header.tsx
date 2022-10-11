import { HeaderContainer, HeaderLogo } from "./Header.style";

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderLogo src="/images/myteacher.png" />
            <p>Encontre um professor perfeito!</p>
        </HeaderContainer>
    )
}

export default Header;