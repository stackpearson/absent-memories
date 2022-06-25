function Home() {
    return (<>
    <div className='home'>
      <div className='home-media'>
        <div className='spotify-player'>
            <iframe src="https://open.spotify.com/embed/artist/0dFzZO6uuLyEyPFyd2aWRT?utm_source=generator" width="100%" height="380"></iframe>
        </div>
          <div className='youtube-player'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/S580Zf_D8jM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="true">
            </iframe>
          </div>
      </div>
        
    </div>

    </>);
  }
  
  export default Home;