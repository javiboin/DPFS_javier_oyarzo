import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./pages/Dashboard"

function App() {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />}></Route>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/*' element={<Navigate to='/' />}></Route>
        </Routes>
    )
}

export default App
