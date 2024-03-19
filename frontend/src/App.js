
import './App.css';
import Navbar from './components/navbar/navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shopcategory } from './Pages/Shopcategory';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';
import { Shop } from './Pages/Shop';
import { Footer } from './components/footer/footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'

function App() {
  return (
    <div>
      <BrowserRouter>      
         <Navbar/>
         <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
             <Route path=':productId' element={<Product/>}/>
          </Route>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<LoginSignup/>}/>
          </Routes> 
          <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
