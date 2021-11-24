import { Theme } from '@emotion/react';

import { colors } from './colors';
import { query, media } from './custom-media';

const theme: Theme = {
  colors,
  media: {
    ...media,
    query
  }
};

export { theme };
