import React, { useState } from 'react';
import Chatter from '../../Components/RoomPage/Chatter';

function ChatterContainer() {
  const [chat, setChat] = useState('');
  
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChat(event.target.value);
  }
  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chat) {
      console.log(chat);
    }
    setChat('');
  }

  return (
    <Chatter
      value={chat}
      onChangeInput={onChangeInput}
      onSubmitForm={onSubmitForm}
    />
  );
}

export default ChatterContainer;