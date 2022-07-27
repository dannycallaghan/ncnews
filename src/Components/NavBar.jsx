import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitaliseString } from '../utils';
import { get_topics } from '../api';

function NavBar() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [topics, setTopics] = useState([]);

  useEffect(() => {

    fetch(get_topics())
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        if (result.msg) {
          setError(true);
          return;
        }
        setTopics(result.topics);
      }, (error) => {
        setError(error);
      });

  }, []);

  return (
    <section className="NavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/all-articles">All Articles</Link></li>
        {!loaded && ( // 1 Loading
          <li>Loading...</li>
        )}
        {loaded && error && ( // 2 Error
          <li>Unable to retrieve topics</li>
        )}
        {loaded && !error && ( // 3 Success
          <>
            {topics.map((topic, i) => (
              <li key={i}><Link to={`/topic/${topic.slug}`}>{capitaliseString(topic.slug)}</Link></li>
            ))}
          </>
        )}
      </ul>
    </section>
  );
}

export default NavBar;
