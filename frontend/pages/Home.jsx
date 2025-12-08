import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offre from '../components/Offre'

function Home() {
  const [offres, setOffres] = useState([])

  useEffect(() => {
    const query = {
      selector: {},
      sort: [{ "date_publication": "desc" }], 
      limit: 20
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
      .then(data => setOffres(data.docs))
      .catch(err => console.error("Erreur chargement offres :", err))
  }, [])

  return (
    <main className="container">
      {offres.map((offre) => (
        <article key={offre._id} className="offre">
          <a href={`/offre/${offre._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Offre {...offre} />
          </a>
        </article>
      ))}
    </main>
  )
}

export default Home
