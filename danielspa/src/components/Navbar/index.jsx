import './index.scss';
import { Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-bar'>
    <Link  exact='true' activeclassname='active' to='/'>
     <i className='fa-solid fa-house fa-fw fa-3x'style={{color:'#ffd43b',}} />
     </Link>
     <Link exact='true' activeclassname='active' className='about-link' to='/about'>
     <i className='fa-solid fa-user fa-fw fa-3x'style={{color:'#ffd43b',}}/>
     </Link>
     <Link exact='true' activeclassname='active' className='contact-link' to='/contact'>
     <i className='fa-solid fa-envelope fa-fw fa-3x' style={{color:'#ffd43b',}}/>
     </Link>
     <Link to='https://www.linkedin.com/in/daniel-castillo-573342294/'>
     <i className='fa-brands fa-linkedin fa-fw fa-3x' style={{color:'#ffd43b',}}/>
     </Link>
     <Link to='https://github.com/DannyCastle1'>
     <i className='fa-brands fa-github fa-fw fa-3x' style={{color:'#ffd43b',}}/>
     </Link>
    </nav>
    
  )
}

export default Navbar
