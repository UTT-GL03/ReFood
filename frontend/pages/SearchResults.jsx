import { useEffect, useState } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import Offre from '../components/Offre'

function SearchResults() {
  const [params] = useSearchParams()
  const query = params.get('q')

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
          "$or": [
            { titre: { "$regex": `(?i)${query}` } },
            { ville: { "$regex": `(?i)${query}` } }
          ],
          date_publication: { "$gt": null }
        },
        sort: [{ date_publication: "desc" }],
        limit: 21,
        bookmark: reset ? null : requestedBookmark
      })
    })
      .then(res => res.json())
      .then(data => {
        setOffres(prev => reset ? data.docs : [...prev, ...data.docs])
        setNextBookmark(data.bookmark)
      })
  }

  useEffect(() => {
    setOffres([])
    setRequestedBookmark(null)
    fetchOffres(true)
  }, [query])

  useEffect(() => {
    if (requestedBookmark) fetchOffres()
  }, [requestedBookmark])

  return (
    <>
      <h2 style={{ margin: '1.5rem 2rem' }}>
        Résultats pour « {query} »
      </h2>

      <main className="container">
        {offres.map(offre => (
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
            onClick={() => setRequestedBookmark(nextBookmark)}
            style={{
              padding: '0.8rem 1.5rem',
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

export default SearchResults
