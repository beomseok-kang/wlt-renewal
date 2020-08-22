import { windowSize } from "../Modules/window";
import { store } from "../";
import { headerHeight } from "../Components/RoomPage/RoomHeader";
import { chatterHeight } from "../Components/RoomPage/Chatter";
import { addRem } from "./funcLib";

type chatSize = windowSize;

export const rem = 16;

export const getWindowDimensions = (): windowSize => {
  const { innerWidth: width, innerHeight: height } = window;
  return { width, height };
};

export const getRandomPosition = ({
    width: cWidth,
    height: cHeight
  }: chatSize
) => {
  // c = chat, w = window, f = frame (iframe)
  const { width: fWidth, height: wHeight } = store.getState().window;
  const fHeight = wHeight - addRem([headerHeight, chatterHeight]) * rem;
  const left = Math.random() * (fWidth - cWidth);
  const top = Math.random() * (fHeight - cHeight);
  return { left, top };
}