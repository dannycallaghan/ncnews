import { useEffect, useState } from 'react';
import Api from '../api';
import Article from './Article';

function Articles() {
  const numArticles = 6;

  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {

    fetch(Api.get_articles)
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        setArticles(result.articles.splice(0, numArticles));
      }, (error) => {
        setError(error);
      });

  }, []);

  if (error) {
    return <div className="error">Sorry, there has been a problem.</div>
  } else if (!loaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <>
        <p>Showing {numArticles} from the DB</p>
        {articles.map((article, i) => (
          <Article key={i} data={article} />
        ))}
      </>
    );
  }
}

export default Articles;