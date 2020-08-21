import { createNumPeopleSaga } from "../lib/asyncUtilis";
import { getNumPeopleInRoom } from "../api/socket";
import { takeEvery } from "redux-saga/effects";

const GET_NUMPEOPLE = 'numPeople/GET_NUMPEOPLE';
const GET_NUMPEOPLE_SUCCESS = 'numPeople/GET_NUMPEOPLE_SUCCESS';
const GET_NUMPEOPLE_ERROR = 'numPeople/GET_NUMPEOPLE_ERROR';

export const getNumPeople = () => ({
  type: GET_NUMPEOPLE,
  error: undefined
});

// state

export type numPeople = {
  all: number;
  dwg: number; drx: number; gen: number; t1: number; af: number;
  kt: number; sb: number; dyn: number; sp: number; hle: number;
};

const initialState: numPeople = {
  all: -1,
  dwg: -1, drx: -1, gen: -1, t1: -1, af: -1,
  kt: -1, sb: -1, dyn: -1, sp: -1, hle: -1
}

// saga

const getNumPeopleSaga = createNumPeopleSaga(GET_NUMPEOPLE, getNumPeopleInRoom);

export function* numPeopleSaga() {
  yield takeEvery(GET_NUMPEOPLE, getNumPeopleSaga);
}

// reducer

export default function numPeople(state: numPeople = initialState, action: any): numPeople {
  switch(action.type) {
    case GET_NUMPEOPLE:
      return state;
    case GET_NUMPEOPLE_SUCCESS:
      return action.payload;
    case GET_NUMPEOPLE_ERROR:
      return initialState
    default:
      return state;
  }
}