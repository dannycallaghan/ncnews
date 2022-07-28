import { useEffect, useState, useContext } from 'react';
import { get_comments, make_comment, delete_comment } from '../api';
import Comment from './Comment';
import AddComment from './AddComment';
import UserProfileContext from '../UserProfile/UserProfileContext';

function Comments(props) {
  const { id } = props;
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [comments, setComments] = useState([]);
  const userProfile = useContext(UserProfileContext);

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

  const handleNewComment = (event, target) => {
    const message = target.current.value;
    event.preventDefault();

    fetch(make_comment(id), {
        method: 'POST',
        body: JSON.stringify({
          body: message,
          username: userProfile.username,
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
        setComments(prev => [result.comment, ...prev]);
        target.current.value = '';
      }, (error) => {
        setError(error);
      });

  };

  const handleDelete = (event, comment_id) => {

    fetch(delete_comment(comment_id), {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(result => {
        // TODO:
        // Error is SyntaxError: Unexpected end of JSON input
        // We BELIEVE that there is an issue with the API
        console.log(`Error 1 ${result}`);
        setLoaded(true);
        if (result.msg) {
          // setDeleteError(true);
          setError(true);
          return;
        }
        // setDeleteSuccess(true);
        setComments(prev => prev.filter((comment) => comment.comment_id !== comment_id));
      }, (error) => {
        console.log(`Error 2 ${error}`);
        // setDeleteError(true);
        setError(error);
      });

  }

  /*

  const [deleteError, setDeleteError] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState();

  */

  if (error) {
    return <div className="alert">Sorry, there has been a problem fetching the comments.</div>
  } else if (!loaded) {
    return <div className="loading">Loading...</div>
  } else {
    return (
      <div className="comments">
        <AddComment action={handleNewComment} id={id} />

        {/*

        {deleteSuccess && (
          <p>Your comment has been successfully delete.</p>
        )}

        {deleteError && (
          <p>Sorry, we were unable to delete this comment.</p>
        )}

        {!deleteLoaded && (
          <p>Delete comment....</p>
        )}

        */}

        {comments.map(comment => (
          <Comment key={comment.comment_id} action={handleDelete} data={comment} />
        ))}
      </div>
    );
  }
}

export default Comments;