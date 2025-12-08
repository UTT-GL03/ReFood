import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const { id } = useParams()
  const [offre, setOffre] = useState(null)

useEffect(() => {
  fetch('http://localhost:5984/refood_db/_all_docs?include_docs=true', {
    headers: {
      'Authorization': 'Basic ' + btoa('refooduser:refoodmdp')
    }
  })
    .then(res => res.json())
    .then(data => {
      const found = data.rows.map(row => row.doc).find(x => x._id === id)
      setOffre(found)
    })
    .catch(err => console.error("Erreur chargement article :", err))
}, [id])


  if (!offre) return <p>Chargement de l'article...</p>

  return (
    <>
      <header style={{ padding: '12px 0' }}>
        <button onClick={() => window.history.back()} aria-label="Retour" style={{ marginRight: 12, cursor: 'pointer' }}>← Retour</button>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}></Link>
      </header>

      <main className="container">
        <article className="offre">
          <header>
            <span className="tag">{offre.type}</span> — <span>{offre.etat}</span>
            <br />
            <time>Publié {dayjs(offre.date_publication).format('LL')}</time>
          </header>

          <h2>{offre.titre}</h2>
          <p>{offre.description}</p>

          <img src="/src/assets/default.png" alt="default" />

          <p><strong>Quantité :</strong> {offre.quantite}</p>
          <p><strong>Ville :</strong> {offre.ville}</p>
          <p><strong>Statut :</strong> {offre.statut}</p>
          <p><small>Date limite : {offre.date_limite}</small></p>
        </article>
      </main>
    </>
  )
}

export default Article
