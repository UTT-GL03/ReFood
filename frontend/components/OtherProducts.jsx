import { Link } from 'react-router-dom';

export default function OtherProducts({ products }) {
  return (
    <div className="other-products">
      <h3>Autres produits similaires</h3>

      <div className="grid">
        {products.slice(0, 3).map((p) => (
          <Link to={`/offre/${p._id}`} key={p._id} className="offre">
            <img src="/src/assets/default.png" />
            <h4>{p.titre}</h4>
            <p><strong>Ville :</strong> {p.ville}</p>
            <p><strong>Statut :</strong> {p.statut}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
