import { Link } from 'react-router-dom'
import data from '../assets/sample_data.json'
import Offre from '../components/Offre'

function Home() {
  return (
    <main className="container">
      {data.offres.map((offre) => (
        <Link key={offre.id} to={`/offre/${offre.id}`}>
          <Offre {...offre} />
        </Link>
      ))}
    </main>
  )
}

export default Home
