import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <section className="NavBar">
      <ul>
        <li><Link to="/">Home</Link></li>
      </ul>
    </section>
  );
}

export default NavBar;
