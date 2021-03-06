import React, { useEffect, useState } from 'react';
import YoutubeContainer from './YoutubeContainer';
import ChatWrapper from '../../Components/RoomPage/ChatWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Modules';
import { getWindowDimensions } from '../../lib/sizeAndPositioning';
import { windowSize, updateWindowSize } from '../../Modules/window';

const useSize = (): windowSize => {
  const [size, setSize] = useState(getWindowDimensions());
  const dispatch = useDispatch();
  useEffect(() => {
    function handleResize() {
      setSize(getWindowDimensions());
      dispatch(updateWindowSize(size));
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  });
  return size;
}

function ChatWrapperContainer() {
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();
  const size = useSize();

  useEffect(() => {
    dispatch(updateWindowSize(size));
  }, [size, dispatch]);

  return (
    <ChatWrapper>
      <YoutubeContainer/>
      {chat}
    </ChatWrapper>
  );
}

export default React.memo(ChatWrapperContainer);