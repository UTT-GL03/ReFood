import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartProvider } from "./context/CartContext"

import Home from "../pages/Home"
import Article from "../pages/Article"
import Cart from "../pages/Cart"
import Header from "../components/Header"
import Footer from "../components/Footer"
import OffresByCategorie from "../pages/OffresByCategorie"
import SearchResults from "../pages/SearchResults"

import "./App.css"
import "@picocss/pico/css/pico.min.css"

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offre/:id" element={<Article />} />
          <Route path="/type/:type" element={<OffresByCategorie />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
