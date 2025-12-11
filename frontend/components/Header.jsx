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

      <select>
        <option value="">Tous</option>
        <option value="don">Don</option>
        <option value="vente">Vente</option>
      </select>
    </header>
  );
}
