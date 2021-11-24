import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Select = styled.select<{ fullWidth?: boolean }>`
  ${({ fullWidth }) =>
    fullWidth
      ? css`
          width: 100%;
        `
      : null}

  padding: 0.8rem 0.5rem;
  border: none;
  border-bottom: 2px solid rgb(14, 160, 160);
  font-size: 1.2rem;
  background: #fbfbfb;
  position: relative;
`;
