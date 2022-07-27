import { useEffect, useState } from 'react';
import { get_comments } from '../api';
import Comment from './Comment';
import AddComment from './AddComment';

function Comments(props) {
  const { id } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {

    fetch(get_comments(id))
      .then(res => res.json())
      .then(result => {
        setLoaded(true);
        if (result.msg) {
          setError(true);
          return;
        }
        setComments(result.comments);
      }, (error) => {
        setError(error);
      });

  }, []);

  const handleNewComment = (e) => {
    console.log('Comments component has heard this');
    e.preventDefault();
  };

  if (error) {
    return <div className="alert">Sorry, there has been a problem.</div>
  } else if (!loaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <div className="comments">
        <AddComment action={handleNewComment} id={id} />
        {comments.map(comment => (
          <Comment key={comment.comment_id} data={comment} />
        ))}
      </div>
    );
  }
}

export default Comments;