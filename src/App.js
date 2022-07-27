import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';
import Home from './Components/Home';
import AllArticles from './Components/AllArticles';
import Topic from './Components/Topic';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/all-articles" element={<AllArticles />} />
        <Route path="/topic/:topic" element={<Topic />} />
      </Route>
    </Routes>
  );
}

export default App;
