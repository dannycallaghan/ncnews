const apiServer = 'https://nc-news-example-3.herokuapp.com/api';

const Api = {
  topics: `${apiServer}/topics`,
  articles: `${apiServer}/articles`,
  comments: `${apiServer}/comments`,
  users: `${apiServer}/users`,
};

export function get_article (id) {
  return `${Api.articles}/${id}`;
}

export function get_comments (id) {
  return `${Api.articles}/${id}/comments`;
}

export function get_articles () {
  return `${Api.articles}`;
}

export function get_topics () {
  return `${Api.topics}`;
}

export function make_article_vote (id) {
  return `${Api.articles}/${id}`;
}

export default Api;