import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useCart } from "../src/context/CartContext"

export default function Header() {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  const { cart } = useCart()
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/" id="logo-link">ReFood</Link>
      </div>

      <input
        id="search-bar"
        type="search"
        placeholder="Rechercher un produit ou une ville…"
        value={search}
        onChange={e => setSearch(e.target.value)}
        onKeyDown={e => {
          if (e.key === "Enter" && search.trim()) {
            navigate(`/search?q=${encodeURIComponent(search)}`)
          }
        }}
      />

      <nav>
        <Link to="/type/Légumes">🥕 Légumes</Link>
        <Link to="/type/Fruits">🍎 Fruits</Link>
        <Link to="/type/Pain">🍽️ Pain</Link>
        <Link to="/cart">🧺 {count}</Link>
      </nav>
    </header>
  )
}
