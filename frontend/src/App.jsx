import './App.css'
import { CountUsers } from './CountUsers'
import { CountProducts } from './CountProducts'
import { LastProduct } from './LastProduct'
import { LastUser } from './LastUser'
import { CountProductsByCategory } from './CountProductsByCategory'
import { CountProductsBySubcategory } from './CountProductsBySubcategory'
import { CountBrands } from './CountBrands'
import { GetProducts } from './GetProducts'
import { ProductsBySubcategory } from './ProductsBySubcategory'

function App() {
    return (
        <div className='app'>
            <h1>Sound City Instrumentos - API Dashboard React</h1>
            <div className='container'>
                <CountUsers />
                <CountProducts />
                <CountProductsByCategory />
                <CountProductsBySubcategory />
                <CountBrands />
            </div>

            <hr />

            <div className="container">
                <LastProduct />
                <LastUser />
            </div>

            <hr />
            
            <h2>Panel de Categorías y Subcategorías con el total de productos de cada una</h2>
            <div className="subcategory">
                <ProductsBySubcategory />
            </div> 

            <hr />
            
            <GetProducts />
        </div>
    )
    }

export default App
