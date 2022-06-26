import epPic from '../img/the-memory-ep.png'
import storePic from '../img/store.png'

function Home() {
    return (<>
    <div className='home'>

      <div className='home-media'>
        <div className='spotify-player'>
            <iframe src="https://open.spotify.com/embed/artist/0dFzZO6uuLyEyPFyd2aWRT?utm_source=generator" width="100%" height="380"></iframe>
        </div>
        <div className='youtube-player'>
            <h2>Where Were You Music Video</h2>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S580Zf_D8jM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
            </iframe>
        </div>
      </div>

      <h2>Listen to The Memory, EP!</h2>
      <div className='img-container'>
        <a href="https://open.spotify.com/album/6HdXpl2JL8PgEGZijYLe4Z" target="new">
          <img src={epPic} alt="album cover for The Memory EP" />
        </a>
      </div>
      <h2>Check out our Merch!</h2>
      <div className='img-container'>
        <a href="https://my-store-11028518.creator-spring.com/" target="new">
          <img src={storePic} alt="album cover for The Memory EP" />
        </a>
      </div>

    </div>

    </>);
  }
  
  export default Home;