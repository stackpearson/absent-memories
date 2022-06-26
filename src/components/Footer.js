import {IconContext} from "react-icons";
import {BsFacebook, BsInstagram, BsSpotify, BsYoutube} from "react-icons/bs";

function Footer() {
    return (
      <footer>
        <div className='social-container'>
            <div>
                <h3>Follow Us</h3>
            </div>
            
            <div className='socials'>
                <IconContext.Provider value={{size: "2em", color: "white", className: 'fade-in'}}>
                    <div className='icon-container'>
                        <a href="https://www.facebook.com/absentmemoriesband/?__xts__%5Bfacebook%5D" target="new">
                            <BsFacebook height='35px' width='35px'/>
                        </a>
                    </div>
                </IconContext.Provider>

                <IconContext.Provider value={{size: "2em", color: "white", className: 'fade-in'}}>
                    <div className='icon-container'>
                        <a href="http://instagram.com/absentmemoriesband" target="new">
                            <BsInstagram height='35px' width='35px'/>
                        </a>  
                    </div>
                </IconContext.Provider>

                <IconContext.Provider value={{size: "2em", color: "white", className: 'fade-in'}}>
                    <div className='icon-container'>
                        <a href="https://open.spotify.com/artist/0dFzZO6uuLyEyPFyd2aWRT" target="new">
                            <BsSpotify height='35px' width='35px'/>
                        </a>
                    </div>
                </IconContext.Provider>

                <IconContext.Provider value={{size: "2em", color: "white", className: 'fade-in'}}>
                    <div className='icon-container'>
                        <a href="https://www.youtube.com/channel/UCGPHzJjV8bvOV4WwRDUHVkA" target="new">
                            <BsYoutube height='35px' width='35px'/>
                        </a>
                    </div>
                </IconContext.Provider>
        </div>
        </div>
        
        
      </footer>
    );
  }
  
  export default Footer;