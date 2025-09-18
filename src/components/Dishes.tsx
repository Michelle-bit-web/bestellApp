import DishItem from "./DishItem";
import type { Dish } from "../interfaces";

type DishProps = {
  dishes: Dish[];
};

const Dishes = ({dishes}: DishProps) => {
    const mains = dishes.filter(dish => dish.type === "main");
    const sides = dishes.filter(dish => dish.type === "side");
    const drinks = dishes.filter(dish => dish.type === "drink");

    return (
    <div className="dish-card pd-16-24">
      {/* Hauptgerichte */}
      {mains.length > 0 && (
        <>
          <h2 className="mb-16">Hauptgerichte</h2>
          {mains.map((dish) => (
            <DishItem key={dish.name} dish={dish} />
          ))}
        </>
      )}

      {/* Beilagen */}
      {sides.length > 0 && (
        <>
          <h2 className="mb-16">Beilagen</h2>
          {sides.map((dish) => (
            <DishItem key={dish.name} dish={dish} />
          ))}
        </>
      )}

      {/* Getränke */}
      {drinks.length > 0 && (
        <>
          <h2 className="mb-16">Getränke</h2>
          {drinks.map((dish) => (
            <DishItem key={dish.name} dish={dish} />
          ))}
        </>
      )}
    </div>
  );
};


export default Dishes;