import Navbar from './Navbar';

const Header = () => {
    return (
        <header className="pd-16-24">
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