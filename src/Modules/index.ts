import { combineReducers } from "redux";
import numPeople, { numPeopleSaga } from './numPeople';
import chat from './chat';
import { all } from "redux-saga/effects";

const rootReducer = combineReducers({
  numPeople,
  chat
});

export function* rootSaga() {
  yield all([numPeopleSaga()]);
}

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>