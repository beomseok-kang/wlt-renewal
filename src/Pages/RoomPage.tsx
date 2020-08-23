import React, { useEffect } from 'react';
import teams from '../teams.json';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { removeAllChat } from '../Modules/chat';
import RoomHeaderContainter from '../Containers/RoomPage/RoomHeaderContainer';
import ChatSocketContainer from '../Containers/RoomPage/ChatSocketContainer';

const StyledPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

function RoomPage({ match }: any) {
  const { team } = match.params;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(removeAllChat());
  }, [dispatch]);

  const _buildBody = (
    <>
      <StyledPageWrapper>
        <RoomHeaderContainter />
        <ChatSocketContainer />
      </StyledPageWrapper>
    </>
  );

  const _buildDNEBody = ( // the team does not exist
    <>
      <div>
        The team does not exist.
      </div>
    </>
  );

  if (!teams.includes(team)) {
    return _buildDNEBody;
  }
  return _buildBody;
}

export default RoomPage;