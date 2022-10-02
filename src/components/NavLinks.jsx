import Card from './shared/Card';
import { NavLink } from 'react-router-dom';

function NavLinks() {
  return (
    <Card>
      <div className='nav-links'>
        <NavLink to='/' activeclassname='Active'>
          Home
        </NavLink>
        <NavLink to='/about' activeclassname='Active'>
          About
        </NavLink>
      </div>
    </Card>
  );
}

export default NavLinks;
