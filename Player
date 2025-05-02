import React, { useState, useRef } from 'react';
import { FaPlay, FaPause, FaStepForward, FaStepBackward, FaVolumeUp, FaRandom } from 'react-icons/fa';
import { MdPlaylistAdd, MdRepeat } from 'react-icons/md';
import './Player.css';

function Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(50);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    audioRef.current.currentTime = (audioRef.current.duration / 100) * newProgress;
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;
  };

  return (
    <div className="player">
      <div className="player__song-info">
        <img src="https://i.scdn.co/image/ab67616d00004851c96f7c7b077c224975b4c5ce" alt="Album Cover" />
        <div className="player__song-details">
          <h4>Song Title</h4>
          <p>Artist Name</p>
        </div>
      </div>
      <div className="player__controls">
        <div className="player__buttons">
          <button className="player__button">
            <FaRandom />
          </button>
          <button className="player__button">
            <FaStepBackward />
          </button>
          <button className="player__button player__button--play" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>
          <button className="player__button">
            <FaStepForward />
          </button>
          <button className="player__button">
            <MdRepeat />
          </button>
        </div>
        <div className="player__progress">
          <span>1:23</span>
          <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleProgressChange}
          />
          <span>3:45</span>
        </div>
      </div>
      <div className="player__volume">
        <FaVolumeUp />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <audio ref={audioRef} src="your-audio-file.mp3" />
    </div>
  );
}

export default Player;
