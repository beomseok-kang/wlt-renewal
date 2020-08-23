import React from 'react';
import Youtube from '../../Components/RoomPage/Youtube';

function YoutubeContainer() {

  const dummyUrl = 'https://www.youtube.com/embed/gyTEudfvEo0';
  

  return (
    <Youtube url={dummyUrl}/>
  );
}

export default YoutubeContainer;