const CartDishes = () => {
    return ( 
        <div>
            <div className="flex-end">
                <button className="btn light-btn trash-btn">
                    <img src="statics/images/trash3.svg" alt="Trash Icon to delete whole shopping cart list" />
                </button>
            </div>
            <div className="d-flex">
                <p>1x</p>
                <p>Pizza Sandwich</p>
            </div>
            <div className="d-flex">
                <div className="d-flex">
                    <button className="btn dark-btn">+</button>
                    <button className="btn dark-btn">-</button>
                </div>
                <p>9,50 €</p>
            </div>
        </div>
     );
}
 
export default CartDishes;