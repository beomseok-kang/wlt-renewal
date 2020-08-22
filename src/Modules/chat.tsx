import React from 'react';
import ChatText from '../Components/RoomPage/ChatText';
import { takeEvery, put } from 'redux-saga/effects';
import { getRandomPosition, rem } from '../lib/sizeAndPositioning';

const APPEND_CHAT = 'chat/APPEND_CHAT';
const APPEND_CHAT_COMPLETE = 'chat/APPEND_CHAT_COMPLETE';
const REMOVE_CHAT = 'chat/REMOVE_CHAT';
const REMOVE_ALL_CHAT = 'chat/REMOVE_ALL_CHAT';

export const appendChat = (chat: string, id: string) => ({
  type: APPEND_CHAT,
  payload: chat,
  meta: id
});
export const appendChatComplete = (
  chat: string,
  id: string,
  left: number,
  top: number
) => ({
  type: APPEND_CHAT_COMPLETE,
  payload: {
    chat,
    left,
    top
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

export type chats = JSX.Element[];

const initialState: chats = [];

// saga

const appendChatSaga = function* (action: any) {
  // the below 2rem is derived from the font-size of default chat, 2rem.
  // may need to be altered if the font-size changes.
  const { left, top } = getRandomPosition({
    width: action.payload.length * 2 * rem,
    height: 2 * rem
  });
  const payload = {
    chat: action.payload,
    left,
    top
  }
  yield put({
    type: APPEND_CHAT_COMPLETE,
    payload,
    meta: action.meta
  });
}

export function* chatSaga() {
  yield takeEvery(APPEND_CHAT, appendChatSaga);
}

// reducer

export default function chat(state: chats = initialState, action: any): chats {
  const { type, payload, meta } = action;

  switch(type) {
    case APPEND_CHAT:
      return state;
    case APPEND_CHAT_COMPLETE:
      return state.concat(
        <ChatText
          key={meta}
          chat={payload.chat}
          left={payload.left}
          top={payload.top}
        />
      );
    case REMOVE_CHAT:
      return state.filter(element => element.key !== payload);
    case REMOVE_ALL_CHAT:
      return initialState;
    default:
      return state;
  }
}