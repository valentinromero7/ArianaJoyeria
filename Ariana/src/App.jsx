
import './App.css'
import Productos from './components/productos/productos'
import ItemListContainer from './components/itemListContainer/itemListContainer'
import  NavBar from'./components/navbar/navbar'
function App() {

  return (
    <> 
      <NavBar />
      <ItemListContainer greeting='Bienvenidos a Ariana Joyeria' />
      <div className= "cards-container">
                <Productos
          img='/img/collar.jpg'
          nombre='Collar'
          precio={50000}
        />
        <Productos
          img='/img/anillo.jpg'
          nombre='anillo'
          precio={40000}
        />
      </div>

    </>
  )
}

export default App
