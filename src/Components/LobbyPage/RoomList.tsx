import React from 'react';
import styled from 'styled-components';

const StyledUnorderedList = styled.ul`
  /* size and settings */
  width: 50rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  margin: 0;

  /* theme */
  background: tomato;
`;

type RoomListProps = {
  children: React.ReactNode;
}

function RoomList({ children }: RoomListProps) {
  return (
    <StyledUnorderedList>
      {children}
    </StyledUnorderedList>
  );
}

export default RoomList;