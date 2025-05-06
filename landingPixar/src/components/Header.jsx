import MenuHeader from "./header/MenuHeader";
import logo from "@/assets/img/logo.png";

const Header = () => {
    return (
        <header className="Header">
            <div className="Header-logo">
                <img src={logo} alt="logo" />
            </div>
            <MenuHeader />
        </header>
    );
}

export default Header;