import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const Container = styled.div(
  ({ theme }) => css`
    max-width: 144rem;
    margin: auto;
    padding: 0;

    ${theme.media?.gteSmall} {
      padding: 0 4rem;
    }

    ${theme.media?.gteMedium} {
      padding: 0 8rem;
    }
  `
);
