import Dishes from "./Dishes";
import { useState, useEffect } from "react";
import type { Dish } from "../interfaces";

const DishList = () => {
  const [dishes, setDishes] = useState<Dish[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:8000/dishes")
      .then((resp) => resp.json())
      .then((data: Dish[]) => {
        setDishes(data);
      });
  }, []); 

    return (
        <>
            { dishes && < Dishes dishes={dishes} /> }
        </>
    );
}
 
export default DishList;