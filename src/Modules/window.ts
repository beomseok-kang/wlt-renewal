const UPDATE_WINDOW_SIZE = 'window/UPDATE_WINDOW_SIZE';

export const updateWindowSize = (size: windowSize) => ({
  type: UPDATE_WINDOW_SIZE,
  payload: size
});

//state

export type windowSize = {
  width: number;
  height: number;
};

const initialState: windowSize = {
  width: 0,
  height: 0
};

// reducer

export default function window(state: windowSize = initialState, action: any): windowSize {
  switch(action.type) {
    case UPDATE_WINDOW_SIZE:
      return action.payload;
    default:
      return state;
  }
}