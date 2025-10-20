import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Offre({ titre, description, quantite, type, etat, ville, statut, date_publication, date_limite }) {
  return (
    <article className="offre">
      <header>
        <span className="tag">{decodeHtml(type)}</span> — <span>{etat}</span>
        <br />
        <time>publié {dayjs(date_publication).fromNow()}</time>
      </header>
      <h2>{decodeHtml(titre)}</h2>
      <p>{description}</p>
      <p><strong>Quantité :</strong> {quantite}</p>
      <p><strong>Ville :</strong> {ville}</p>
      <p><strong>Statut :</strong> {statut}</p>
      <p><small>Date limite : {date_limite}</small></p>
    </article>
  )
}

// 🔤 fonction utilitaire pour corriger les caractères mal encodés
function decodeHtml(str) {
  return str
    .replace(/├®/g, "é")
    .replace(/├à/g, "à")
    .replace(/├¿/g, "ç")
    .replace(/├ª/g, "ê")
    .replace(/â/g, "à")
    .replace(/Ô/g, "ô")
    .replace(/├ï/g, "ï")
}

export default Offre
