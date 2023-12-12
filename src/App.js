
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shopcategory from './pages/Shopcategory';
import Shop from './pages/Shop';
import men_banner from './components/Assets/banner_mens.png'
import kids_banner from './components/Assets/banner_kids.png'
import women_banner from './components/Assets/banner_women.png'
import Footer from './components/Footer/Footer';
import Product from './pages/Product';
import Cart from './pages/Cart';








function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<Shop/>}> </Route>
      <Route path='/men' element={<Shopcategory banner={men_banner} category="men"/>}></Route>
      <Route path='/women' element={<Shopcategory banner={women_banner} category="women"/>}></Route>
      <Route path='/kids' element={<Shopcategory banner={kids_banner} category="kid"/>}></Route>
      <Route path='/product' element={<Product/>}>
         <Route path=':productId' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/login' element={<loginsignup/>}></Route>
      

      
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
