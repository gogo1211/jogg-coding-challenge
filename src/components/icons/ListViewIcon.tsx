import { SVGProps } from 'react';

export const ListViewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" viewBox="0 0 20 20" data-ember-action="1034" {...props}>
    <defs>
      <path d="M20 16v4H0v-4h20zm0-8v4H0V8h20zm0-8v4H0V0h20z" id="list-icon_svg__a"></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="list-icon_svg__b" fill="#fff">
        <use xlinkHref="#list-icon_svg__a"></use>
      </mask>
      <use fill="currentColor" xlinkHref="#list-icon_svg__a"></use>
      <g mask="url(#list-icon_svg__b)">
        <path d="M-6-6h32v32H-6z"></path>
      </g>
    </g>
  </svg>
);
