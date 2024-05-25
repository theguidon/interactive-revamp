import { useSelector } from "react-redux";
import "./index.css";

function CardGallery() {
  const articles = useSelector((state) => state.articles);

  return (
    <div className="card-gallery">
      {articles.isReady &&
        articles.data.map((article) => (
          <img className="card" src={article.cover} />
        ))}
    </div>
  );
}

export default CardGallery;
