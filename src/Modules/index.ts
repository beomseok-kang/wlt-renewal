import { combineReducers } from "redux";
import numPeople, { numPeopleSaga } from './numPeople';
import chat, { chatSaga } from './chat';
import window from './window';
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  numPeople,
  chat,
  window
});

export function* rootSaga() {
  yield all([numPeopleSaga(), chatSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;