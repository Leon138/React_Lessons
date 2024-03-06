import { Link } from 'react-router-dom';
import './header-style.css';

export const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
      <Link to='/main'>Main</Link>
      <Link to='/posts'>Posts</Link>
      <Link to='/users'>Users</Link>
    </div>
  );
};
