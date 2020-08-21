import React from 'react';
import ChatText from '../Components/RoomPage/ChatText';

const APPEND_CHAT = 'chat/APPEND_CHAT';
const REMOVE_CHAT = 'chat/REMOVE_CHAT';
const REMOVE_ALL_CHAT = 'chat/REMOVE_ALL_CHAT';

export const appendChat = (chat: string, id: string) => ({
  type: APPEND_CHAT,
  payload: {
    chat,
    id
  },
  meta: id
});
export const removeChat = (id: string) => ({
  type: REMOVE_CHAT,
  payload: id,
  meta: id
});
export const removeAllChat = () => ({
  type: REMOVE_ALL_CHAT,
  payload: null
});

// state

export type chat = JSX.Element[];

const initialState: chat = [];

// reducer

export default function chat(state: chat = initialState, action: any): chat {
  const { type, payload } = action;

  switch(type) {
    case APPEND_CHAT:
      return state.concat(<ChatText key={payload.id} chat={payload.chat}/>);
    case REMOVE_CHAT:
      return state.filter(element => element.key !== payload);
    case REMOVE_ALL_CHAT:
      return initialState;
    default:
      return state;
  }
}