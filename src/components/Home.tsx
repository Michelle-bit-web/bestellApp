import DishList from "./DishList";

const Home = () => {
    return ( 
        <main>
            <section className="dish-section pd-16-24">
                <header className="restaurant-header">
                    <img className="restaurant-logo" src="/statics/images/restaurant-logo.png" alt="Green Fire Logo" />
                </header>
                <h1>Green Fire</h1>
            </section>
            <DishList />
        </main>
     );
}

export default Home;