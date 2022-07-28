import { useContext } from 'react';
import { formatDate } from '../utils';
import UserProfileContext from '../UserProfile/UserProfileContext';

function Comment(props) {
  const { data, action } = props;
  const userProfile = useContext(UserProfileContext);

  // const isAuthor = (userName, currentUserName) => {
  //   return userName === currentUserName;
  // }

  return (
    <div className="comment-card">
      {data.author === userProfile.username && (
        <button onClick={(event) => action(event, data.comment_id)}>X</button>
      )}
      <p>{data.body}</p>
      <p>{data.author}</p>
      <p>{formatDate(data.created_at)}</p>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default Comment;