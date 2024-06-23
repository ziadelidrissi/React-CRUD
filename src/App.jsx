import { Route, Routes, Link } from "react-router-dom"
import HomePage from "./pages/HomePage"
import CreatePage from "./pages/CreatePage"
import EditPage from "./pages/EditPage"

function App() {
  return (
    <div>
      <nav className="bg-gray-800">
        <div className="container mx-auto px-2">
          <Link to="/">
            <h2 className="text-white text-2xl font-bold">React CRUD</h2>
          </Link>
        </div>
      </nav>

      <Routes>
        <Route index element={<HomePage/>}></Route>
        <Route path="/create" element={<CreatePage/>}></Route>
        <Route path="/edit" element={<EditPage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
