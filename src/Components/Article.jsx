import { Link } from 'react-router-dom';
import Vote from './Vote';
import Comments from './Comments';

function Article(props) {
  const { data, summary } = props;

  return (
    <div className="article-card">
      <h3>{data.title}</h3>
      <h4>{data.author}</h4>
      <h5>{data.created_at}</h5>
      <p>Comments: {data.comment_count}</p>
      {!summary && (
        <p>{data.body}</p>
      )}
      <Vote count={data.votes} id={data.article_id} />
      {summary && (
        <Link to={`/article/${data.article_id}`}>View full article</Link>
      )}
      {!summary && (
        <Comments id={data.article_id} />
      )}
    </div>
  )
}

export default Article;