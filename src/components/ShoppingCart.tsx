import CartDishes from "./CartDishes";
import { useEffect, useState } from "react";

type CartItem = {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
  content: string;
  delivery: boolean;
  amount: number;
};

const ShoppingCart = () => {
    const [cart, setCart] = useState<CartItem[]>([]);
    function loadCart() {
        fetch("http://localhost:8000/cart")
            .then((res) => res.json())
            .then((data) => setCart(data));
    }

  useEffect(() => { loadCart() }, []);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.amount, 0);
  const totalOrders = cart.reduce((orders, item) => orders + item.amount, 0);

    return (
        <aside className="shopping-cart pd-16-24">
            <h2>Warenkorb</h2>
            {cart.length === 0 ? (
        <p>Ihr Warenkorb ist leer.</p>
      ) : (
            <>
                <div>
                    <button className="btn light-btn trash-btn">
                        <img src="statics/images/trash3.svg" alt="Trash Icon to delete whole shopping cart list" />
                    </button>
                </div>
                <div className="flex-colum gap-16">
                    <ul className="cart-list">
                    {cart.map(item => (
                        <CartDishes key={item.id} dish={item} refreshCart={loadCart}/>
                        ))}
                    </ul>
                    <span className="d-flex">
                        <p>Zwischensumme</p>
                        <p>{subtotal.toFixed(2).replace('.', ',')} €</p>
                    </span>
                    <span className="d-flex">
                        <p>zzgl. Lieferkosten</p>
                        <p>5,00 €</p>
                    </span>
                    <span className="d-flex">
                        <p>Gesamt</p>
                        <p>{(subtotal + 5).toFixed(2).replace('.', ',')} €</p>
                    </span>
                    <div>
                        <button className="btn dark-btn order-btn">Bestellen</button>
                    </div>
                    <div className="mobile-order-btn-container">
                        <button className="btn dark-btn mobile-order-btn">
                            Bestellen
                            <span className="order-number">{totalOrders}</span>
                        </button>
                    </div>
                </div>
            </>
      )}
            
        </aside>
    );
}
 
export default ShoppingCart;