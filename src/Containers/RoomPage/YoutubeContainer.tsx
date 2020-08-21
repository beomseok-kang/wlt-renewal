import React from 'react';
import Youtube from '../../Components/RoomPage/Youtube';

function YoutubeContainer() {

  const dummyUrl = 'https://www.youtube.com/embed/quFzj55OHyk';

  return (
    <Youtube url={dummyUrl}/>
  );
}

export default YoutubeContainer;