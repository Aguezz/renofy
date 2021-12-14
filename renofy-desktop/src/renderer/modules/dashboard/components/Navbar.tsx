import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <div>
      <Link to="/">QRCode</Link>
      <Link to="/setting">Settings</Link>
    </div>
  );
};
