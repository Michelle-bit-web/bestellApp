import type { Dish } from "../interfaces";

type DishProps = {
  dish: Dish;
};

const DishItem = ({ dish }: DishProps) => {
    async function addToCart() {
        try {
            const res = await fetch(`http://localhost:8000/cart?name=${dish.name}`);
            const exists = await res.json();

            if(exists.length > 0) {
                const item = exists[0];
                await fetch(`http://localhost:8000/cart/${item.name}`, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ amount: item.amount + 1 }),
            });
        } else {
            await fetch("http://localhost:8000/cart", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ ...dish, amount: 1 }),
            });
        }
        } catch (err) {
        console.error("Error on adding dish", err);
        }
    }

    return ( 
        <div>
            <img className="mb-16" src={`statics/images/${dish.image}.png`} alt={dish.name} />
            <div className="add-to-cart-wrapper">
            <h3>{dish.name}</h3>
            <button className="btn dark-btn" onClick={addToCart}>+</button>
            </div>
            <p>{dish.content}</p>
            <p>{dish.price} €</p>
        </div>
    );
}
 
export default DishItem;