import {Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navigation() {

    const showResponsiveNav = () => {
        console.log('it worked bitch')
        document.getElementById('hamburger-items').classList.remove('hidden');
        document.getElementById('show-hamburger').classList.add('hidden');
        document.getElementById('hide-hamburger').classList.remove('hidden');
    }
    const hideResponsiveNav = () => {
        document.getElementById('hamburger-items').classList.add('hidden')
        document.getElementById('hide-hamburger').classList.add('hidden')
        document.getElementById('show-hamburger').classList.remove('hidden')
    }     

    return (

        <nav>
            <div className="nav-container">
                <div className='nav-left'>
                    <Link className='nav-link' to='/'>Absent Memories</Link>
                </div>
                <div className='nav-right'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/shows'>Upcoming Shows</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    <Link className='nav-link' to='/'>Store</Link>
                </div>
    
                <div className='nav-mobile'>
                    <div id='show-hamburger' className='nav-hamburger-icon' onClick={showResponsiveNav}>
                        <GiHamburgerMenu />
                    </div>
                    <div id='hide-hamburger' className='nav-hamburger-icon hidden' onClick={hideResponsiveNav}>
                        <GiHamburgerMenu />
                    </div>
                    
                    <div className='nav-hamburger hidden' id='hamburger-items'>
                        <div className='nav-hamburger-items'><Link className='nav-link' to='/'>Home</Link></div>
                        <div className='nav-hamburger-items'><Link className='nav-link' to='/shows'>Upcoming Shows</Link></div>
                        <div className='nav-hamburger-items'><Link className='nav-link' to='/about'>About</Link></div>
                        <div className='nav-hamburger-items'><Link className='nav-link' to='/contact'>Contact</Link></div>
                        <div className='nav-hamburger-items'><Link className='nav-link' to='/'>Store</Link></div>
                    </div>
                </div>
                
            </div>
        </nav>

    );
  }
  
  export default Navigation;