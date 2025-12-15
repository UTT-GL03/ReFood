import { useCart } from "../src/context/CartContext"

export default function ArticleRight({ offre }) {
  const { addToCart } = useCart()

  return (
    <div className="article-right">
      <div className="seller-card">
        <h3>Vendeur</h3>
        <p>Utilisateur ID : {offre.user_id || "Inconnu"}</p>
      </div>

      <button className="contact-btn">
        Contacter le vendeur
      </button>

      <button
        className="cart-btn"
        onClick={() => addToCart(offre)}
      >
        🧺 Ajouter au panier
      </button>
    </div>
  )
}
