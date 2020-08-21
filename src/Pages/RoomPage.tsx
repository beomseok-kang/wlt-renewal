import React, { useEffect } from 'react';
import teams from '../teams.json';
import styled from 'styled-components';
import ChatterContainer from '../Containers/RoomPage/ChatterContainer';
import ChatWrapperContainer from '../Containers/RoomPage/ChatWrapperContainer';
import { useDispatch } from 'react-redux';
import { removeAllChat } from '../Modules/chat';

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
        <ChatWrapperContainer />
        <ChatterContainer />
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