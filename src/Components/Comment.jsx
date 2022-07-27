function Comment(props) {
  const { data } = props;
  return (
    <div className="comment-card">
      <p>{data.body}</p>
      <p>{data.author}</p>
      <p>{data.created_at}</p>
    </div>
  );
}

export default Comment;