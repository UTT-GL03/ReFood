import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Offre({ titre, description, quantite, type, etat, ville, statut, date_publication, date_limite }) {
  return (
    <article className="offre">
      <header>
        <span className="tag"></span> {type} <span>{etat}</span>
        <br />
        <time>publié {dayjs(date_publication).fromNow()}</time>
      </header>
      <h2>{titre}</h2>
      <img src='\src\assets\default.png' alt='default'></img>
      <p><strong>Quantité :</strong> {quantite}</p>
      <p><strong>Ville :</strong> {ville}</p>
      <p><strong>Statut :</strong> {statut}</p>
      <p><small>Date limite : {date_limite}</small></p>
    </article>
  )
}

export default Offre
