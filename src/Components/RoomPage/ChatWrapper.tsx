import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  height: calc(100% - 6rem);
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