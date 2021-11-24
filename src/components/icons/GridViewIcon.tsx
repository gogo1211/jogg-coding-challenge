import { SVGProps } from 'react';

export const GridViewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width="1rem" viewBox="0 0 20 20" className="grid-icon_svg__active" data-ember-action="1035" {...props}>
    <defs>
      <path
        d="M5 15.3v5H0v-5h5zm7.5 0v5h-5v-5h5zm7.5 0v5h-5v-5h5zM5 7.7v5H0v-5h5zm7.5 0v5h-5v-5h5zm7.5 0v5h-5v-5h5zM5 .3v5H0v-5h5zm7.5 0v5h-5v-5h5zm7.5 0v5h-5v-5h5z"
        id="grid-icon_svg__a"
      ></path>
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="grid-icon_svg__b" fill="#fff">
        <use xlinkHref="#grid-icon_svg__a"></use>
      </mask>
      <use fill="currentColor" xlinkHref="#grid-icon_svg__a"></use>
      <g mask="url(#grid-icon_svg__b)">
        <path d="M-3.5-2.8h26.1v26h-26z"></path>
      </g>
    </g>
  </svg>
);
