import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {

  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  )
}

export default App
