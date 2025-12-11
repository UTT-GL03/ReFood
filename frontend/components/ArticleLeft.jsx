export default function ArticleLeft({ offre }) {
  return (
    <div className="article-left">
      <img 
        src="/src/assets/default.png" 
        alt={offre.titre} 
        className="big-image"
      />
    <div className="title-fav">
        <h1>{offre.titre}</h1>
        <button className="fav-btn">❤️ Mettre en favoris</button>
    </div>
      <p>{offre.description}</p>
    </div>
  );
}
