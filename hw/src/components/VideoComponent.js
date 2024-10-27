import React from 'react';
import './styles/VideoComponent.css';
const VideoComponent = () => {
  return (
    <video width="400" controls>
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
};

export default VideoComponent;
