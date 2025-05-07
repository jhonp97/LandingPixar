import MenuHeader from "./header/MenuHeader";




const Header = () => {
    return (
        <header className="Header">
            <div className="Header-logo">
                <img src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/1613495438818-408JDVSTB7NWSHVC20M7/logo.png?format=1500w" alt="logo" className="Header-logoImg"/>
            </div>
            <MenuHeader />
        </header>
    );
}

export default Header;