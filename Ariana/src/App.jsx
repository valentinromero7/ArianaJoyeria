
import './App.css'
import Navbar from './components/navbar/navbar'
import ItemDetailContainer from './components/itemDetailContainer/itemDetailContainer'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import {BrowserRouter, Routes , Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/'element={<ItemListContainer/>}/>
        <Route path='/categoria/:categoryId'element={<ItemListContainer/>}/>
        <Route path='/itemDetailContainer/item'element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter> 
  )
}

export default App
