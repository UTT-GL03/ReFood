import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'
import 'dayjs/locale/fr'

// Import des nouveaux composants
import ArticleLeft from '../components/ArticleLeft'
import ArticleRight from '../components/ArticleRight'
import OtherProducts from '../components/OtherProducts'

dayjs.extend(localizedFormat)
dayjs.locale('fr')

function Article() {
  const { id } = useParams()
  const [offre, setOffre] = useState(null)
  const [otherProducts, setOtherProducts] = useState([])

  // --- Récupération de l'article actuel ---
  useEffect(() => {
    fetch('http://localhost:5984/refood_db/_all_docs?include_docs=true', {
      headers: {
        'Authorization': 'Basic ' + btoa('refooduser:refoodmdp')
      }
    })
      .then(res => res.json())
      .then(data => {
        const found = data.rows.map(row => row.doc).find(x => x._id === id)
        setOffre(found)
      })
      .catch(err => console.error("Erreur chargement article :", err))
  }, [id])


  // --- Récupération des autres produits similaires ---
  const fetchOthers = (current) => {
    if (!current) return

    const query = {
      selector: {
        type: current.type,
        _id: { "$ne": id }
      },
      limit: 3
    }

    fetch("http://localhost:5984/refood_db/_find", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Basic " + btoa("refooduser:refoodmdp")
      },
      body: JSON.stringify(query)
    })
      .then(res => res.json())
      .then(data => setOtherProducts(data.docs))
      .catch(err => console.error("Erreur autres produits :", err))
  }

  // Lance la recherche une fois que l'article est chargé
  useEffect(() => {
    if (offre) {
      fetchOthers(offre)
    }
  }, [offre])



  if (!offre) return <p>Chargement de l'article...</p>

  return (
    <>
      <div style={{ padding: "12px 0", marginLeft: "40px" }}>
        <button 
          onClick={() => window.history.back()} 
          aria-label="Retour" 
          style={{ cursor: "pointer", marginRight: 12 }}
        >
          ← Retour
        </button>

        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}></Link>
      </div>

      <main className="article-layout container">

        <div className="left">
          <ArticleLeft offre={offre} />
        </div>

        <div className="right">
          <ArticleRight offre={offre} />
        </div>
        </main>


        <div className="bottom">
          <OtherProducts products={otherProducts} />
        </div>

      
    </>
  )
}

export default Article
