import React from 'react';
import styled from 'styled-components';

export const chatterHeight = '6rem';

const StyledForm = styled.form`
  height: ${chatterHeight};
  margin: 0;
`;

const StyledInput = styled.input`
  outline: none;
  border: none;
  background: #FFFFFF;
`;

const StyledButton = styled.button`
  outline: none;
  border: none;
  width: 3rem;
  height: 3rem;
`;

type ChatterProps = {
  value: string;
  onChangeInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmitForm: (event: React.FormEvent<HTMLFormElement>) => void;
}

function Chatter({
  value,
  onChangeInput,
  onSubmitForm
}: ChatterProps) {
  return (
    <StyledForm onSubmit={onSubmitForm}>
      <StyledInput value={value} onChange={onChangeInput}/>
      <StyledButton type="submit">
        전송
      </StyledButton>
    </StyledForm>
  );
}

export default Chatter;