import { call, put } from 'redux-saga/effects';

export const createNumPeopleSaga = (type: string, promiseCreator: any) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  return function* (action: any) {
    try {
      const result = yield call(promiseCreator);
      yield put({
        type: SUCCESS,
        payload: result,
        error: null
      });
    } catch (err) {
      yield put({
        type: ERROR,
        payload: err,
        error: err
      });
    }
  }
};