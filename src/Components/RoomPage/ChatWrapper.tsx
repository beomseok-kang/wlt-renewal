import React from 'react';
import styled from 'styled-components';
import { addRem } from '../../lib/funcLib';
import { headerHeight } from './RoomHeader';
import { chatterHeight } from './Chatter';

const heightToRemove: string = addRem([headerHeight, chatterHeight]) + 'rem';

const StyledDiv = styled.div`
  height: calc(100% - ${heightToRemove});
  width: 100%;
  position: relative;
`;

type ChatWrapperProps = {
  children: React.ReactNode;
}

function ChatWrapper({
  children
}: ChatWrapperProps) {
  return (
    <StyledDiv>
      {children}
    </StyledDiv>
  );
}

export default ChatWrapper;