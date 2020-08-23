import React, { useState } from 'react';
import ranStr from 'crypto-random-string';
import Chatter from '../../Components/RoomPage/Chatter';
import { ChatSocketData } from '../../api/socket';

type ChatterContainerProps = {
  socket: SocketIOClient.Socket;
  team: string
}

function ChatterContainer({ socket, team }: ChatterContainerProps) {
  const [chat, setChat] = useState('');
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  }
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chat) {
      const id = ranStr({ length: 10 });
      const data: ChatSocketData = { chat, id, team };
      socket.emit('chat', data);
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