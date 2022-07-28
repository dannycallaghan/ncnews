import { useContext } from 'react';
import UserProfileContext from '../UserProfile/UserProfileContext';

function Header() {
  const userProfile = useContext(UserProfileContext);

  return (
    <section className="Header">
      <p>Logo</p>
      <p>Logged in as {userProfile.username}</p>
    </section>
  );
}

export default Header;
