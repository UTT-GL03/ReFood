import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Offre from '../components/Offre'

function OffresByCategorie() {
  const { type } = useParams()

  const [offres, setOffres] = useState([])
  const [nextBookmark, setNextBookmark] = useState(null)
  const [requestedBookmark, setRequestedBookmark] = useState(null)

  const fetchOffres = (reset = false) => {
    fetch('http://localhost:5984/refood_db/_find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('refooduser:refoodmdp')
      },
      body: JSON.stringify({
        selector: {
          type,
          date_publication: { "$gt": null }
        },
        sort: [
          { type: "desc" },
          { date_publication: "desc" }
        ],
        limit: 21,
        bookmark: reset ? null : requestedBookmark
      })
    })
      .then(res => res.json())
      .then(data => {
        setOffres(prev => reset ? data.docs : [...prev, ...data.docs])
        setNextBookmark(data.bookmark)
      })
      .catch(err => console.error('Erreur chargement catégories :', err))
  }

  // 🔁 Changement de catégorie → reset
  useEffect(() => {
    setOffres([])
    setRequestedBookmark(null)
    fetchOffres(true)
  }, [type])

  // ➕ Pagination
  useEffect(() => {
    if (requestedBookmark) {
      fetchOffres()
    }
  }, [requestedBookmark])

  return (
    <>
      {/* Titre HORS grid */}
      <h2 style={{ margin: '1.5rem 2rem' }}>
        Catégorie : {type}
      </h2>

      {/* Catalogue */}
      <main className="container">
        {offres.map(offre => (
          <article key={offre._id} className="offre">
            <Link
              to={`/offre/${offre._id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <Offre {...offre} />
            </Link>
          </article>
        ))}
      </main>

      {/* Bouton pagination HORS grid */}
      {nextBookmark && (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button
            type="button"
            onClick={() => setRequestedBookmark(nextBookmark)}
            style={{
              padding: '0.8rem 1.5rem',
              fontSize: '1rem',
              cursor: 'pointer',
              borderRadius: '8px',
              backgroundColor: '#2ecc71',
              color: 'white',
              border: 'none'
            }}
          >
            Suivant
          </button>
        </div>
      )}
    </>
  )
}

export default OffresByCategorie
