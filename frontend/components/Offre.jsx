import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/fr'

dayjs.extend(relativeTime)
dayjs.locale('fr')

function Offre({ _id, titre, description, quantite, type, etat, ville, statut, date_publication, date_limite }) {
  return (
    <div className="offre-comp">
       <div className="offre-header">
        <span className="tag">{type}</span> <span>{etat}</span>
        <br />
        <time>publié {dayjs(date_publication).fromNow()}</time>
      </div>
      <h2>{titre}</h2>
      <img src={`/default.png?${_id}`} alt='default'></img>
      <p><strong>Quantité :</strong> {quantite}</p>
      <p><strong>Ville :</strong> {ville}</p>
      <p><strong>Statut :</strong> {statut}</p>
      <p><small>Date limite : {date_limite}</small></p>
    </div>
  )
}

export default Offre
