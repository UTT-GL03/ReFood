import { Link } from "react-router-dom";

export default function Header({ onSearch }) {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">ReFood</Link>
      </div>

      <input 
        type="search" 
        placeholder="Rechercher un produit..."
        onChange={(e) => onSearch(e.target.value)}
      />

      <nav>
        <Link to="/type/Légumes">🥕 Légumes</Link>
        <Link to="/type/Fruits">🍎 Fruits</Link>
        <Link to="/type/Pain">🍽️ Pain</Link>
      </nav>
    </header>
  );
}
