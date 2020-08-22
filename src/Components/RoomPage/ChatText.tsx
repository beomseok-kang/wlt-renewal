import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
  font-size: 2rem;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1;
  position: absolute;
`;

type ChatTextProps = {
  chat: string;
  left: number;
  top: number;
}

function ChatText({
  chat,
  left,
  top
}: ChatTextProps) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);
    return () => clearTimeout(timer);
  });

  return show 
    ? <StyledText style={{left, top}}>{chat}</StyledText>
    : null;
}

export default ChatText;