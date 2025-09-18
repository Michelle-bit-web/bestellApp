import type { Dish } from "../interfaces";

type DishProps = {
  dish: Dish;
};

const DishItem = ({ dish }: DishProps) => {
    return ( 
        <div>
            <img className="mb-16" src={`statics/images/${dish.image}.png`} alt={dish.name} />
            <div className="add-to-cart-wrapper">
            <h3>{dish.name}</h3>
            <button className="btn dark-btn">+</button>
            </div>
            <p>{dish.content}</p>
            <p>{dish.price} €</p>
        </div>
    );
}
 
export default DishItem;