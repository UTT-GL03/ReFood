import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Article from '../pages/Article'
import reactLogo from './assets/react.svg'  
import './App.css'
import '@picocss/pico/css/pico.min.css'

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>
            <Link to="/">
              <img src={reactLogo} alt="React logo" style={{ height: "40px" }} />
              ReFood
            </Link>
        </h1>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offre/:id" element={<Article />} />
        {/* Autres routes possibles :
            <Route path="/offres" element={<OffresPage />} />
            <Route path="/utilisateurs" element={<UsersPage />} />
        */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
