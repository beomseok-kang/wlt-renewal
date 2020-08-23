import React, { useState } from 'react';
import ranStr from 'crypto-random-string';
import Chatter from '../../Components/RoomPage/Chatter';

type ChatterContainerProps = {
  socket: SocketIOClient.Socket
}

function ChatterContainer({ socket }: ChatterContainerProps) {
  const [chat, setChat] = useState('');
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  }
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chat) {
      const id = ranStr({ length: 10 });
      socket.emit('chat', { chat, id });
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