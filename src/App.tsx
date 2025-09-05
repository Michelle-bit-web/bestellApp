
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import ShoppingCart from './components/ShoppingCart';



function App() {

  return (
    <div className="app">
      <Header />
      <div className="main-container content-wrapper">
        <Home />
        <ShoppingCart />
      </div>
      <Footer />
    </div>
  )
}

export default App
