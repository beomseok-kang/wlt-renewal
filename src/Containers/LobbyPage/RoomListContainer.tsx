import React, { useEffect } from 'react';
import RoomList from '../../Components/LobbyPage/RoomList';
import RoomButtonContainer from './RoomButtonContainer';
import teams from '../../teams.json';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../Modules';
import { getNumPeople } from '../../Modules/numPeople';
import { getMaxNum } from '../../lib/funcLib';

function RoomListContainer() {
  const numPeople = useSelector((state: RootState) => state.numPeople);
  const dispatch = useDispatch();
  const teamsList = teams as (keyof typeof numPeople)[];

  useEffect(() => {
    dispatch(getNumPeople());
  }, [dispatch]);

  return (
    <RoomList>
      {
        teamsList.map(team => {
          const maxNum = getMaxNum(team);
          const currentNum = numPeople[team];
          return <RoomButtonContainer key={team} maxNum={maxNum} currentNum={currentNum} team={team}/>
        })
      }
    </RoomList>
  );
}

export default RoomListContainer;