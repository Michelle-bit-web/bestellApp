

type CartDishesProps = {
  dish: {
    id: number;
    name: string;
    price: number;
    amount: number;
  };
  refreshCart: () => void;
};

const CartDishes = ({ dish, refreshCart }: CartDishesProps) => {

    async function updateAmount(newAmount: number) {
        if (newAmount <= 0) {
        await fetch(`http://localhost:8000/cart/${dish.name}`, { method: "DELETE" });
        } else {
        await fetch(`http://localhost:8000/cart/${dish.name}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: newAmount }),
        });
        }
        refreshCart();
    }

    return ( 
        <div className="flex-colum gap-8 border-bottom mb-16">
            <div className="flex-end">
                <button className="btn light-btn trash-btn" onClick={() => updateAmount(0)}>
                    <img src="statics/images/trash3.svg" alt="Trash Icon to delete whole shopping cart list" />
                </button>
            </div>
            <div className="d-flex">
                <p>{dish.amount}x</p>
                <p>{dish.name}</p>
            </div>
            <div className="d-flex">
                <div className="d-flex gap-16">
                    <button className="btn dark-btn cart-dish-btn" onClick={() => updateAmount(1)}>+</button>
                    <button className="btn dark-btn cart-dish-btn" onClick={() => updateAmount(1)}>-</button>
                </div>
                <p>{(dish.price * dish.amount).toFixed(2)} €</p>
            </div>
        </div>
     );
}
 
export default CartDishes;