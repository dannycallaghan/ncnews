import { useRef } from 'react';

function AddComment(props) {
  const { id, action } = props;
  const commentBox = useRef();

  return (
    <form onSubmit={(e) => action(e, commentBox)}>
      <textarea ref={commentBox} required cols="40" rows="10" placeholder="What's on your mind?..."></textarea>
      <div>
        <button type="submit">Post Comment</button>
      </div>
    </form>
  )
}

export default AddComment;