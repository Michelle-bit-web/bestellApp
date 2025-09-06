import CartDishes from "./CartDishes";

const ShoppingCart = () => {
    return (
        <aside className="shopping-cart pd-16-24">
            <h2>Warenkorb</h2>
            <p>Ihr Warenkorb ist leer.</p>
            <div>
                <button className="btn light-btn trash-btn">
                    <img src="statics/images/trash3.svg" alt="Trash Icon to delete whole shopping cart list" />
                </button>
            </div>
            <div>
                <ul>
                    <CartDishes />
                    <CartDishes />
                </ul>
                <span className="d-flex">
                    <p>Zwischensumme</p>
                    <p>22,40 €</p>
                </span>
                <span className="d-flex">
                    <p>zzgl. Lieferkosten</p>
                    <p>5 €</p>
                </span>
                <span className="d-flex">
                    <p>Gesamt</p>
                    <p>27,40 €</p>
                </span>
                <div>
                    <button className="btn dark-btn">Bestellen</button>
                </div>
            </div>
        </aside>
    );
}
 
export default ShoppingCart;