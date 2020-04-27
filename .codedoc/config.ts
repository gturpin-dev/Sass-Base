
import { configuration } from '@codedoc/core';

import { theme } from './theme';


export const config = /*#__PURE__*/configuration({
  theme,                                  // --> add the theme. modify `./theme.ts` for chaning the theme.
  dest: {
    namespace: '/Sass-Base'               // --> your github pages namespace. remove if you are using a custom domain.
  },
  page: {
    title: {
      base: 'Sass Base'                   // --> the base title of your doc pages
    }
  },
  misc: {
    github: {
      user: 'gturpin-dev',                // --> your github username (where your repo is hosted)
      repo: 'Sass-Base',                  // --> your github repo name
    }
  },
});
