import React, { useEffect } from 'react';
import YoutubeContainer from './YoutubeContainer';
import ChatWrapper from '../../Components/RoomPage/ChatWrapper';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Modules';
import { appendChat } from '../../Modules/chat';
import cryptoRandomString from 'crypto-random-string';

function ChatWrapperContainer() {
  const chat = useSelector((state: RootState) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    const hello = setInterval(() => {
      const randomString = cryptoRandomString({ length: 10 });
      dispatch(appendChat('안녕하세요.', randomString));
    }, 2000);

    return () => {
      clearInterval(hello);
    };
  }, [chat, dispatch]);

  return (
    <ChatWrapper>
      <YoutubeContainer/>
      {chat}
    </ChatWrapper>
  );
}

export default ChatWrapperContainer;