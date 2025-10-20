import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from './assets/sample_data.json'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>🥕 ReFood</h1>
        <p>Partageons les surplus alimentaires, localement</p>
      </header>

      <main className="container">
        <h2>Offres disponibles</h2>
        {data.offres.map((offre, i) => (
          <Offre key={i} {...offre} />
        ))}
      </main>
    </>
  )
}

function Offre({ titre, description, quantite, type, etat, tags, date_publication, date_limite, ville, statut }) {
  return (
    <article className="offre">
      <header>
        <h3>{titre}</h3>
        <span className="type">{type}</span> | <span className="etat">{etat}</span>
      </header>
      <p>{description}</p>
      <p><strong>Quantité :</strong> {quantite}</p>
      <p><strong>Ville :</strong> {ville}</p>
      <p><strong>Statut :</strong> {statut}</p>
      <p><strong>Tags :</strong> {tags.join(', ')}</p>
      <footer>
        <small>Publiée le {date_publication} • Jusqu’au {date_limite}</small>
      </footer>
    </article>
  )
}

export default App
