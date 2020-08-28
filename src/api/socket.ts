import { numPeople } from "../Modules/numPeople";

async function dummyAsync(ms: number) {
  await new Promise(resolve => setTimeout(resolve, ms))
}

export const getNumPeopleInRoom = async ():Promise<numPeople> => {

  const dummyNumPeople: numPeople = {
    all: 400,
    dwg: 400, drx: 400, gen: 400, t1: 400, af: 150,
    kt: 150, sb: 150, dyn: 150, sp: 150, hle: 500
  };

  await dummyAsync(500);
  return dummyNumPeople;
};

const developing = false;

export const ENDPOINT = developing
  ? "http://localhost:80/room"
  : "http://52.78.109.45:80/room";

export type ChatSocketData = {
  chat: string;
  id: string;
};