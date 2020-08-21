import React from 'react';
import RoomButton from '../../Components/LobbyPage/RoomButton';
import { useHistory } from 'react-router-dom';
import { getTeamName } from '../../lib/funcLib';

type RoomButtonContainerProps = {
  team: string;
  currentNum: number;
  maxNum: number;
};

function RoomButtonContainer({
  team,
  currentNum,
  maxNum
}: RoomButtonContainerProps) {
  const routerHistory = useHistory();
  const teamName = getTeamName(team);

  const onClick = () => {
    routerHistory.push(`/room/${team}`);
  }

  return (
    <RoomButton team={team} onClick={onClick} currentNum={currentNum} maxNum={maxNum}>
      {teamName}
    </RoomButton>
  );
}

export default RoomButtonContainer;