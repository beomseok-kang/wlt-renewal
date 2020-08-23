import React, { useEffect } from 'react';
import io from 'socket.io-client';
import ChatWrapperContainer from './ChatWrapperContainer';
import { ENDPOINT, ChatSocketData } from '../../api/socket';
import { useDispatch } from 'react-redux';
import { appendChat } from '../../Modules/chat';
import ChatterContainer from './ChatterConatiner';

function ChatSocketContainer() {
  const dispatch = useDispatch();

  const socket = io.connect(ENDPOINT, { path: '/socket' });
  socket.on('new-chat', ({ chat, id }: ChatSocketData) => {
    dispatch(appendChat(chat, id));
  });
  console.log('hello world!');

  useEffect(() => {
    return () => {
      socket.disconnect();
    };
  }, [socket]);

  return (
    <>
      <ChatWrapperContainer />
      <ChatterContainer socket={socket}/>
    </>
  )
}

export default React.memo(ChatSocketContainer);