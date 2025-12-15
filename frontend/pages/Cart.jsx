import { useCart } from "../src/context/CartContext"

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, total } = useCart()

  if (cart.length === 0) {
    return (
      <main className="panier-container">
        <h2>🧺 Votre panier</h2>
        <p>Votre panier est vide.</p>
      </main>
    )
  }

  return (
    <main className="panier-container">
        <h2 className="page-title">🧺 Votre panier</h2>

        {cart.length === 0 && (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
            Votre panier est vide.
          </p>
        )}

        {cart.map(item => (
          <article key={item._id} className="offre cart-card">
            <h3>{item.titre}</h3>
            <img src='\src\assets\default.png' alt='default'></img>

            <p><strong>Ville :</strong> {item.ville}</p>

            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item._id, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item._id, item.quantity + 1)}>+</button>
            </div>

            <button
              className="remove-btn"
              onClick={() => removeFromCart(item._id)}
            >
              ❌ Supprimer
            </button>
          </article>
        ))}
      <hr />

      <h3>Total : {total.toFixed(2)} €</h3>
      <button style={{ marginTop: "1rem", width: "20%"}}>
        ✅ Valider le panier
      </button>
    </main>
  )
}
