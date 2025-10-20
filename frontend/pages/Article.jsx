import { useParams } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'
import data from '../assets/sample_data.json'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const { id } = useParams()
  const offre = data.offres.find((x) => x.id === parseInt(id))

  if (!offre) {
    return <p>Offre introuvable</p>
  }

  return (
    <main className="container">
      <article className="offre">
        <header>
          <span className="tag">{offre.type}</span> — <span>{offre.etat}</span>
          <br />
          <time>Publié {dayjs(offre.date_publication).format('LLLL')}</time>
        </header>
        <h2>{offre.titre}</h2>
        <p>{offre.description}</p>
        <p><strong>Quantité :</strong> {offre.quantite}</p>
        <p><strong>Ville :</strong> {offre.ville}</p>
        <p><strong>Statut :</strong> {offre.statut}</p>
        <p><small>Date limite : {offre.date_limite}</small></p>
      </article>
    </main>
  )
}

export default Article
