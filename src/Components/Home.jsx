import React from 'react';
import Articles from './Articles';

function Home() {
  return (
    <section>
      <h1>Home</h1>
      <Articles num={6} />
    </section>
  );
}

export default Home;