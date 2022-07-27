import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { get_article } from '../api';
import Article from './Article';

function ArticlePage() {
  const { article_id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [article, setArticle] = useState();

  useEffect(() => {

    fetch(get_article(article_id))
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        if (result.msg) {
          setError(true);
          return;
        }
        setArticle(result.article);
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
      <section>
        <h1>{article.title}</h1>
        <Article data={article} />
      </section>
    );
  }
}

export default ArticlePage;