const Dishes = () => {
    return ( 
        <div className="dish-card pd-16-24">
            <h2>Hauptgerichte</h2>
            <img src="/statics/images/imgMain0.png" alt="Main dish" />
            <div className="add-to-cart-wrapper">
                <h3>Pizza Sandwich</h3>
                <button className="btn-primary">In den Warenkorb</button>
            </div>
            <p>Hausgemachter Pizzateig im Steinofen...</p>
            <p>7,50 €</p>
            
        </div>
     );
}
 
export default Dishes;