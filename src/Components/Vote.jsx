import { useEffect, useState } from 'react';
import { make_article_vote } from '../api';

function Vote(props) {
  const { count, id } = props;
  const [loaded, setLoaded] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(count);

  const handleClick = (num) => {
    let newTotal = total + num;
    newTotal = newTotal < 0 ? 0 : newTotal;

    setLoaded(false);

    fetch(make_article_vote(id), {
        method: 'PATCH',
        body: JSON.stringify({
          inc_votes: num
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        if (result.msg) {
          setError(true);
          return;
        }
        setTotal(newTotal);
      }, (error) => {
        setError(error);
      });

  };

  return (
    <div>
      {!loaded && ( // 1 Loading
        <p>Loading...</p>
      )}
      {loaded && error && ( // 2 Error
        <p>Sorry, we were unable to record your vote. Please try again.</p>
      )}
      {loaded && ( // 3 Success
        <>
          <button onClick={() => handleClick(-1)} disabled={!total}>&darr;</button>
          {` ${total} `}
          <button onClick={() => handleClick(1)}>&uarr;</button>
        </>
      )}
    </div>
  )
}

export default Vote;
