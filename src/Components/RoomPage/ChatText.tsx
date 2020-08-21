import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import useComponentSize from '@rehooks/component-size';
import { getRandomPosition } from '../../lib/funcLib';

const StyledText = styled.div`
  font-size: 2rem;
  color: #FFFFFF;
  font-weight: 700;
  line-height: 1;
  position: absolute;
`;

type ChatTextProps = {
  chat: string;
}

function ChatText({
  chat
}: ChatTextProps) {
  const [show, setShow] = useState(true);
  let ref = useRef(null);
  let size = useComponentSize(ref);
  let { width, height } = size;
  const frame = document.querySelector('iframe');
  const fh = frame?.offsetHeight;
  const fw = frame?.offsetWidth;
  const [randW, randH] = getRandomPosition(width, height, fh || 0, fw || 0);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 8000);
    return () => clearTimeout(timer);
  });

  return show ? <StyledText style={{left: randW, top: randH}} ref={ref}>{chat}</StyledText> : null;
}

export default ChatText;