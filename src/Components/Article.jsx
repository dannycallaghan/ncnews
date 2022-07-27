function Article(props) {
  const { data } = props;
  return (
    <div className="article-card">
      <h3>{data.title}</h3>
      <h4>{data.author}</h4>
      <h5>{data.created_at}</h5>
    </div>
  )
}

export default Article;