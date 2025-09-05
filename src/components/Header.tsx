import Navbar from './Navbar';

const Header = () => {
    return (
        <header>
            <div className="content-wrapper header-content">
                <button className="logo-btn">
                    <img src="/statics/images/bestellapp-logo-white.png" alt="BestellApp Logo" className="logo"/>
                </button>
                <Navbar />
            </div>
        </header>
    );
}
 
export default Header;