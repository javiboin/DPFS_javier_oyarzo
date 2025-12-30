import './App.css'
import { CountUsers } from './countUsers'
import { CountProducts } from './CountProducts'
import { LastProduct } from './LastProduct'
import { LastUser } from './LastUser'

function App() {

  return (
    <div className='app'>
        <h1>Sound City Instrumentos - Dashboard React</h1>
        <CountUsers />
        <CountProducts />
        <LastProduct />
        <LastUser />

        <h2>Panel de Categorías con el total de productos de cada una</h2>

        <h2>Listado de Productos</h2>
    </div>
  )
}

export default App
