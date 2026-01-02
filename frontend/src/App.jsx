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
            <header className='header'>
                <img src="/logo-b.png" alt="Sound City Instrumentos Músicales"></img>
                <h1>API Sound City Instrumentos</h1>
            </header>
            <main>
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
            </main>
            
            <footer>
                <div>
                    <img src="/logo-b.png" alt="Sound City Instrumentos Músicales" />
                    <h3 className="titulo">API Sound City Instrumentos</h3>
                </div>
                <p className="legal">Todos los derechos reservados. © 2025 - Hecho por Javier Oyarzo.<a href="https://github.com/javiboin">@javiboin</a></p>
            </footer>
        </div>
    )
}

export default App
