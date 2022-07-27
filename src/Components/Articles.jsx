import { useEffect, useState } from 'react';
import Article from './Article';
import { get_articles } from '../api';

function Articles(props) {
  const { subject, num } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = get_articles();

    if (subject) {
      url = `${url}?topic=${subject}`;
    }

    fetch(url)
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        if (result.msg) {
          setError(true);
          return;
        }
        let data = result.articles;
        if (num) {
          data = data.splice(0, num);
        }
        setArticles(data);
      }, (error) => {
        setError(error);
      });

  }, [subject]);

  if (error) {
    return <div className="error">Sorry, there has been a problem.</div>
  } else if (!loaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <>
        <p>Showing {articles.length} article{articles.length === 1 ? '' : 's'}.</p>
        {articles.map((article, i) => (
          <Article key={i} data={article} summary={true} />
        ))}
      </>
    );
  }
}

export default Articles;