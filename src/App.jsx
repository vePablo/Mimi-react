import { Route, BrowserRouter, Routes } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
//Componentes
import HomeContainer from "./components/home/HomeContainer";
import ItemDetailContainer from "./components/products/productDetail/ItemDetailContainer";
import ItemListContainer from "./components/products/productsList/ItemListContainer";
import Contacts from "./components/contacts/Contacts";
import Carrito from "./components/products/carrito/Carrito";
import CheckOut from "./components/products/carrito/CheckOut";
import Login from "./components/login/Login";
import BoostNav from "./components/navigability/BoostNav";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  

  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <BoostNav />
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/item" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos/:category" element={<ItemListContainer />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/carrito" element={<Carrito />} />
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/login" element={<Login />} />

          </Routes>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
