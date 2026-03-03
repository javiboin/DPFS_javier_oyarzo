import '../styles/dashboard.css'
import { CountUsers } from '../components/dashboard/CountUsers'
import { CountProducts } from '../components/dashboard/CountProducts'
import { LastProduct } from '../components/dashboard/LastProduct'
import { LastUser } from '../components/dashboard/LastUser'
import { CountProductsByCategory } from '../components/dashboard/CountProductsByCategory'
import { CountProductsBySubcategory } from '../components/dashboard/CountProductsBySubcategory'
import { CountBrands } from '../components/dashboard/CountBrands'
import { GetProducts } from '../components/dashboard/GetProducts'
import { ProductsBySubcategory } from '../components/dashboard/ProductsBySubcategory'

export const Dashboard = () => {
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
                <p className="legal">Todos los derechos reservados. © 2025 - Hecho por Javier Oyarzo. <a href="https://github.com/javiboin">@javiboin</a></p>
            </footer>
        </div>
    )
}
