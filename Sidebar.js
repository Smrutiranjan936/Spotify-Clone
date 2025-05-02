import React from 'react';
import { FaSpotify, FaHome, FaSearch, FaBook } from 'react-icons/fa';
import { MdPlaylistAdd } from 'react-icons/md';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <FaSpotify size={28} />
        <span>Spotify</span>
      </div>
      <ul className="sidebar__menu">
        <li className="active">
          <FaHome />
          <span>Home</span>
        </li>
        <li>
          <FaSearch />
          <span>Search</span>
        </li>
        <li>
          <FaBook />
          <span>Your Library</span>
        </li>
      </ul>
      <div className="sidebar__playlists">
        <div className="sidebar__playlists-header">
          <MdPlaylistAdd />
          <span>Create Playlist</span>
        </div>
        <ul>
          <li>Liked Songs</li>
          <li>My Playlist #1</li>
          <li>Discover Weekly</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
