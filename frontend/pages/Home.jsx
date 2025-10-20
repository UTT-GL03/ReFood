import data from '../assets/sample_data.json'
import Offre from '../components/Offre'

function Home() {
  return (
    <main className="container">
      {data.offres.map((offre) => (
        <Offre key={offre.id} {...offre} />
      ))}
    </main>
  )
}

export default Home
