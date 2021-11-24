/// <reference types="@emotion/react/types/css-prop" />
import '@emotion/react';

import { colors } from './colors';
import { query, media } from './custom-media';

type MediaTokens = typeof media & { query: typeof query };
type ColorTokens = Partial<typeof colors>;

declare module '@emotion/react' {
  export interface Theme {
    colors?: ColorTokens;
    media?: MediaTokens;
  }
}
