function AddComment(props) {
  const { id, action } = props;

  return (
    <form onSubmit={action}>
      <textarea required cols="40" rows="10" placeholder="What's on your mind?..."></textarea>
      <div>
        <button type="submit">Post Comment</button>
      </div>
    </form>
  )
}

export default AddComment;