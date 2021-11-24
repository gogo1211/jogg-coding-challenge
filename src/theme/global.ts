import { css } from '@emotion/react';
import { normalize } from '@src/theme/normalize';

const globalStyles = css`
  ${normalize};

  :root {
    --bottom-notch-height: env(safe-area-inset-bottom);
  }

  /**
   * We find it much easier to reason with border-box as the default box-sizing.
   */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    /**
    * The default font size for browsers is 16px.
    * We apply a size of 62.5% so that, by default, all math with rems will use
    * 10px as a base instead of 16px.
    */
    font-size: 62.5%;
  }

  body {
    margin: 0;
    min-height: 100%;
    font-size: 1.6rem;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    background-color: #f5f5f5;
    font-family: 'Nunito', sans-serif;
    color: #59595b;
  }

  html,
  body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  u,
  a {
    @supports (text-underline-offset: 0.4rem) {
      text-underline-offset: 0.4rem;
      padding-bottom: 0.1rem;
    }
    @supports not (text-underline-offset: 0.4rem) {
      text-underline-position: under;
    }
  }
`;

export { globalStyles };
