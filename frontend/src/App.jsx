import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import Article from '../pages/Article'
import reactLogo from './assets/react.svg'
import Header from "../components/Header"; 
import Footer from "../components/footer"; 
import OffresByCategorie from '../pages/OffresByCategorie.jsx'
import SearchResults from '../pages/SearchResults.jsx'
import './App.css'
import '@picocss/pico/css/pico.min.css'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offre/:id" element={<Article />} />
        <Route path="/type/:type" element={<OffresByCategorie />} />
        <Route path="/search" element={<SearchResults />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
  /*
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
      </Routes>
    </BrowserRouter>
  )
  */
}

export default App
