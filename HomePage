import React from 'react';
import './Home.css';

function Home() {
  const playlists = [
    { id: 1, title: 'Today\'s Top Hits', description: 'Artist names here', image: 'https://i.scdn.co/image/ab67706f00000002b0fe40a6e1692822f5a9d8f1' },
    { id: 2, title: 'RapCaviar', description: 'New music from Drake, Kendrick Lamar and more', image: 'https://i.scdn.co/image/ab67706f00000002ec9d60059aa215a7ba364695' },
    { id: 3, title: 'All Out 2010s', description: 'The biggest songs of the 2010s', image: 'https://i.scdn.co/image/ab67706f00000002ca5a7519c9f6efc06a9e63d5' },
    { id: 4, title: 'Rock Classics', description: 'Rock legends & epic songs', image: 'https://i.scdn.co/image/ab67706f00000002d72ef75e14ca6f60ea2364c2' },
    { id: 5, title: 'Chill Hits', description: 'Kick back to the best new and recent chill hits', image: 'https://i.scdn.co/image/ab67706f00000002e4e0e11c85725d9369c4a9a7' },
  ];

  return (
    <div className="home">
      <div className="home__greeting">
        <h1>Good afternoon</h1>
        <div className="home__user-playlists">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="home__playlist-card">
              <img src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228" alt="Playlist" />
              <span>My Playlist #{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="home__section">
        <h2>Made For You</h2>
        <div className="home__playlists">
          {playlists.map(playlist => (
            <div key={playlist.id} className="home__playlist">
              <img src={playlist.image} alt={playlist.title} />
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
