import {Link} from 'react-router-dom'
import {FcExpand} from 'react-icons/fc'
import {FcCollapse} from "react-icons/fc"
import headerImg from "../img/header.jpeg"

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
                    <Link className='nav-link' to='/'>Abesnt Membories</Link>
                </div>
                <div className='nav-right'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/shows'>Upcoming Shows</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/contact'>Contact</Link>
                    <a href="https://my-store-11028518.creator-spring.com/" target="new" className='nav-link'>Store</a>
                </div>
    
                <div className='nav-mobile'>
                    <div id='show-hamburger' className='nav-hamburger-icon' onClick={showResponsiveNav}>
                        <FcExpand />
                    </div>
                    <div id='hide-hamburger' className='nav-hamburger-icon hidden' onClick={hideResponsiveNav}>
                        <FcCollapse />
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
            <div className='header-img'>
                <img src={headerImg} alt='picture of the band, Absent Memories'/>
            </div>
            
        </nav>

    );
  }
  
  export default Navigation;