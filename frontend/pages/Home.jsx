import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offre from '../components/Offre'

function Home() {
  const [offres, setOffres] = useState([])
  const [nextBookmark, setNextBookmark] = useState()
  const [requestedBookmark, setRequestedBookmark] = useState()

  const fetchOffres = (bookmark) => {
    const query = {
      selector: {},
      sort: [{ "date_publication": "desc" }],
      limit: 21,
      bookmark: bookmark
    }

    fetch('http://localhost:5984/refood_db/_find', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + btoa('refooduser:refoodmdp')
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(data => {
        // Ajoute les nouvelles offres à la liste existante
        setOffres(prev => [...prev, ...data.docs])
        setNextBookmark(data.bookmark)
      })
      .catch(err => console.error("Erreur chargement offres :", err))
  }

  useEffect(() => {
    fetchOffres(requestedBookmark)
  }, [requestedBookmark])

  return (
  <>
    <main className="container">
      {offres.map((offre) => (
        <article key={offre._id} className="offre">
          <Link to={`/offre/${offre._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Offre {...offre} />
          </Link>
        </article>
      ))}
    </main>

      {nextBookmark && (
        <div style={{ textAlign: 'center', margin: '2rem 0' }}>
          <button
            type="button"
            onClick={() => setRequestedBookmark(nextBookmark)}
            style={{ padding: '0.8rem 1.5rem', fontSize: '1rem', cursor: 'pointer', borderRadius: '8px', backgroundColor: '#2ecc71', color: 'white', border: 'none' }}
          >
            Suivant
          </button>
        </div>
      )}
    </>
  )
}

export default Home
