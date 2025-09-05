import DishList from "./DishList";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const Home = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('h1', { type: 'chars, words'})

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })
    });

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