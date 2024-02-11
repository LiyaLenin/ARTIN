
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Header from './Components/Header'
import Auth from './Pages/Auth'
import Categories from './Pages/Categories'
import AllCategories from './Pages/AllCategories'
import Paintings from './Components/Paintings'
import MicroArt from './Components/MicroArt'
import BottleArt from './Components/BottleArt'
import Hampers from './Components/Hampers'
import Wishlist from './Pages/Wishlist'
import Cart from './Pages/Cart'
import Profile from './Pages/Profile'
import ChatBox from './Pages/ChatBox'



function App() {

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/paintings' element={<Paintings />} />
        <Route path='/microart' element={<MicroArt />} />
        <Route path='/bottleart' element={<BottleArt />} />
        <Route path='/hampers' element={<Hampers />} />
        <Route path='/allcategories' element={<AllCategories />} />
        <Route path='/wishlist' element={<Wishlist />} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/chatbox' element={<ChatBox/>} />


        








      </Routes>
      <Footer />
    </>
  )
}

export default App