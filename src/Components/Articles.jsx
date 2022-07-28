import { useEffect, useState } from 'react';
import Article from './Article';
import { get_articles } from '../api';
import OrderBy from './OrderBy';
import SortBy from './SortBy';

function Articles(props) {
  const { subject, num } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [articles, setArticles] = useState([]);

  const [orderAsc, setOrderAsc] = useState(false);
  const [sortBy, setSortBy] = useState('created_at');

  useEffect(() => {
    let url = get_articles();
    let params = [];

    if (subject) {
      params = params.concat([`topic=${subject}`]);
    }

    if (orderAsc) {
      params = params.concat([`order=asc`]);
    }

    if (sortBy) {
      params = params.concat([`sort_by=${sortBy}`]);
    }

    url = `${url}?${params.join('&')}`;

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

  }, [subject, orderAsc, sortBy]);

  const handleOrderBy = () => {
    setOrderAsc(!orderAsc);
  };

  const handleSortBy = (event) => {
    setSortBy(event.target.value);
  }

  if (error) {
    return <div className="error">Sorry, there has been a problem.</div>
  } else if (!loaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <>
        <OrderBy action={handleOrderBy} order={orderAsc} />
        <SortBy action={handleSortBy} sort={sortBy} />
        <p>Showing {articles.length} article{articles.length === 1 ? '' : 's'}.</p>
        {articles.map((article, i) => (
          <Article key={i} data={article} summary={true} />
        ))}
      </>
    );
  }
}

export default Articles;