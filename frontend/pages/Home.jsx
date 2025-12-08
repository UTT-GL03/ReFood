import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offre from '../components/Offre'

function Home() {
  const [offres, setOffres] = useState([])

useEffect(() => {
  fetch('http://localhost:5984/refood_db/_all_docs?include_docs=true', {
    headers: {
      'Authorization': 'Basic ' + btoa('refooduser:refoodmdp')
    }
  })
    .then(res => res.json())
    .then(data => setOffres(data.rows.map(row => row.doc)))
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
