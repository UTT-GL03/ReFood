import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offre from '../components/Offre'

function Home() {
  const [offres, setOffres] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
  .then(res => res.json())
  .then(data => setOffres(data.docs.filter(X => X.type)))
  .catch(err => console.error("Erreur chargement offres :", err))
  }, [])

  return (
    <main className="container">
      {offres.map((offre) => (
        <article key={offre._id} className="offre">
          {/* Lien interne vers la page détail */}
          <a href={`/offre/${offre._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Offre {...offre} />
          </a>
        </article>
      ))}
    </main>
  )
}

export default Home
