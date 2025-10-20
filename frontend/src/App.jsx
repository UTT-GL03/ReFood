import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import data from '../assets/sample_data.json'  // chemin corrigé
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>
          <img src={reactLogo} alt="React logo" style={{ height: "40px" }} />
          ReFood
        </h1>
      </header>

      <main className="container">
        {data.offres.map((offre) => (
          <Offre key={offre.id} {...offre} />
        ))}
      </main>
    </>
  )
}

function Offre({ titre, description, quantite, type, etat, ville, statut, date_limite }) {
  return (
    <article className="offre">
      <header>
        <span className="tag">{decodeHtml(type)}</span> — <span>{etat}</span>
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

// 🔤 petite fonction utilitaire pour corriger les caractères mal encodés
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

export default App