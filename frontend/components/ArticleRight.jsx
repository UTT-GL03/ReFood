export default function ArticleRight({ offre }) {
  return (
    <div className="article-right">
      <div className="seller-card">
        <h3>Vendeur</h3>
        <p>Utilisateur ID : {offre.user_id || "Inconnu"}</p>
      </div>

      <button className="contact-btn">Contacter le vendeur</button>
      <button className="cart-btn">Ajouter au panier</button>
    </div>
  );
}
