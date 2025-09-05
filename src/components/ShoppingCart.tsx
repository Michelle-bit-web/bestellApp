const ShoppingCart = () => {
    return (
        <aside className="shopping-cart pd-16-24">
            <h2>Warenkorb</h2>
            <p>Ihr Warenkorb ist leer.</p>
            <div>
                <button>
                    <img src="statics/images/trash3.svg" alt="Trash Icon to delete whole shopping cart list" />
                </button>
            </div>
        </aside>
    );
}
 
export default ShoppingCart;