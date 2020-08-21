import React from 'react';
import styled from 'styled-components';

const StyledRoomButtonWrapper = styled.li`
  height: 4rem;
  width: 100%;
  background: #bbbbbb;
  border-radius: 1rem;
`;

const StyledTeamImage = styled.img`
  height: 60%;
`;

const StyledSpan = styled.span``;

const StyledRoomButton = styled.button`
  /* settings */
  box-sizing: border-box;
  padding: 0 2rem; margin: 0;
  display: flex;
  outline: none;
  border: none;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  background: none;
  border-radius: 1rem;

  /* width height */
  height: 100%;
  width: 100%;

  /* style */
  color: #FFFFFF;
  font-size: 1rem;
`;

type RoomButtonProps = {
  children: React.ReactNode;
  team: string;
  currentNum: number;
  maxNum: number;
  onClick: () => void;
}

function RoomButton({
  children,
  team,
  currentNum,
  maxNum,
  onClick
}: RoomButtonProps) {
  return (
    <StyledRoomButtonWrapper>
      <StyledRoomButton onClick={onClick}>
        <StyledTeamImage src={require(`../../img/${team}.png`)} alt={`${team} logo`}/>
        {children}
        <StyledSpan>
          {`${currentNum} / ${maxNum}`}
        </StyledSpan>
      </StyledRoomButton>
    </StyledRoomButtonWrapper>
  );
}

export default RoomButton;