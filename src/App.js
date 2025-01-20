
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSinup from './pages/LoginSinup';
import Cart from './pages/Cart'
import Fotter from './components/Fotter/Fotter';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kid_banner from './components/assets/banner_kids.png'
import Admin from './pages/Admin';
function App() {
  return (
    <div>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path = '/' element = {<Shop/>}/>
      <Route path = '/shop' element = {<Shop/>}/>
      <Route path = '/mens' element = {<ShopCategory banner ={men_banner} category  = "men"/>}/>
      <Route path = '/womens' element = {<ShopCategory banner={women_banner} category  = "women"/>}/>
      <Route path = '/kids' element = {<ShopCategory banner={kid_banner} category = "kid"/>}/>
      <Route path = '/admin' element ={<Admin/>}/>
      <Route path = "product" element ={<Product/>}>
      <Route path = ':productId' element = {<Product/>}/>
      
      </Route>
      <Route path = '/cart' element = {<Cart/>}/>
      <Route path = '/login' element = {<LoginSinup/>}/>

      </Routes>
      <Fotter/>

     </BrowserRouter>
    </div>
   
      
    
  );
}

export default App;
