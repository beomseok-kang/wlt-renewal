import React, { useState } from 'react';
import ranStr from 'crypto-random-string';
import Chatter from '../../Components/RoomPage/Chatter';
import { ChatSocketData } from '../../api/socket';
import { useDispatch } from 'react-redux';
import { appendChat } from '../../Modules/chat';

type ChatterContainerProps = {
  socket: SocketIOClient.Socket;
  team: string
}

function ChatterContainer({ socket }: ChatterContainerProps) {
  const [chat, setChat] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  }
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chat) {
      const id = ranStr({ length: 10 });
      const data: ChatSocketData = { chat, id };
      socket.emit('chat', data);
      dispatch(appendChat(data.chat, data.id));
    }
    setChat('');
  }
  return <Chatter
    value={chat}
    onChangeInput={onChangeInput}
    onSubmitForm={onSubmitForm}
  />
}

export default ChatterContainer;