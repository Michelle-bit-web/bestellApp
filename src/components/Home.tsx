import DishList from "./DishList";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const Home = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('h1', { type: 'chars, words'})

        gsap.from(titleSplit.chars, {
            yPercent: 100,
            duration: 2,
            ease: 'expo.out',
            stagger: 0.06
        })

        gsap.from('.restaurant-header', {
            opacity: 0,
            duration: 2,
            ease: 'power1.inOut'
        })
    });

    return ( 
        <main>
            <section className="dish-section pd-16-24">
                <header className="restaurant-header">
                    <img className="restaurant-logo" src="/statics/images/restaurant-logo.png" alt="Green Fire Logo" />
                </header>
                <h1>Green Fire</h1>
                <div>
                    <img src="" alt="" />
                    <p>4,6 (23)</p>
                    <p>Wir stehen für frische, lebendige Küche, gesunde Mahlzeiten, Grillen über dem Holzfeuer und saisonale Gerichte.</p>
                </div>
                <div>
                    <button className="btn light-btn">Lieferung</button>
                    <button className="btn inactive-btn">Abholung</button>
                </div>
                <p>* zzgl. 5€ Lieferkosten</p>
            </section>
            <DishList />
        </main>
     );
}

export default Home;