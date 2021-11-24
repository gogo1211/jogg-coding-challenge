/**
 * There are two type of constants exported here:
 * - simple media query strings (to use, for example, with window.matchMedia())
 * - media query strings prefixed with @media (for easier use on template literals)
 *
 * You might ask why we use the `em` unit instead of `rem` or `px` for these and the
 * answer for that is in this article: https://zellwk.com/blog/media-query-units/
 * In short, it's the best way to ensure proper pixel scaling across browsers,
 * mainly Safari.
 *
 * The default font-size for the browsers is 16px, so all of these values in ems are
 * based on that.
 */

const query = {
  gteSmall: '(min-width: 600px)', // >= 600px
  gteMedium: '(min-width: 960px)', // >= 960px
  gteLarge: '(min-width: 1280px)', // >= 1280px

  lteSmall: '(max-width: 599px)', // <= 599px
  lteMedium: '(max-width: 959px)', // <= 959px
  lteLarge: '(max-width: 1279px)' // <= 1279px
};

const media = {
  gteSmall: `@media ${query.gteSmall}`, // >= 600px
  gteMedium: `@media ${query.gteMedium}`, // >= 960px
  gteLarge: `@media ${query.gteLarge}`, // >= 1280px

  lteSmall: `@media ${query.lteSmall}`, // <= 599px
  lteMedium: `@media ${query.lteMedium}`, // <= 959px
  lteLarge: `@media ${query.lteLarge}` // <= 1279px
};

export { query, media };
