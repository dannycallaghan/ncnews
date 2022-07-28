import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import AllArticles from './Components/AllArticles';
import Topic from './Components/Topic';
import ArticlePage from './Components/ArticlePage';
import UserProfileContext from './UserProfile/UserProfileContext';
import UserProfile from './UserProfile/UserProfile';

function App() {
  const userProfile = UserProfile;

  return (
    <UserProfileContext.Provider value={UserProfile}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/topic/:topic" element={<Topic />} />
          <Route path="/article/:article_id" element={<ArticlePage />} />
        </Route>
      </Routes>
    </UserProfileContext.Provider>
  );
}

export default App;
