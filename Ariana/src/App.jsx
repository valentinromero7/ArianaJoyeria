import './App.css'
import Navbar from './components/navbar/navbar'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './components/context/cartContext'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
