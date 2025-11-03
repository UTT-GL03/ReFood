import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Offre from '../components/Offre'

function Home() {
  const [offres, setOffres] = useState([])

  useEffect(() => {
    fetch('/sample_data.json')
      .then(res => res.json())
      .then(data => setOffres(data.offres))
      .catch(err => console.error("Erreur chargement offres :", err))
  }, [])

  return (
    <main className="container">
      {offres.map((offre) => (
        <Link key={offre.id} to={`/offre/${offre.id}`}>
          <Offre {...offre} />
        </Link>
      ))}
    </main>
  )
}

export default Home
