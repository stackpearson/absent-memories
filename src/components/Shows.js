function Shows() {
    return (
      <div className="shows-container">
        <h2>No upcoming shows scheduled right now, check back later!</h2>
        <div className="youtube-player">
          <h2>Check out one of our live performances!</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/eqO5p6iCKHI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>
    );
  }
  
  export default Shows;