import { memo, SVGProps } from 'react';

const EcommerceUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M17 21.1667C22.753 21.1667 27.4167 16.503 27.4167 10.75C27.4167 4.99703 22.753 0.333333 17 0.333333C11.247 0.333333 6.58333 4.99703 6.58333 10.75C6.58333 16.503 11.247 21.1667 17 21.1667ZM17 21.1667C7.79525 21.1667 0.333333 26.7631 0.333333 33.6667M17 21.1667C26.2047 21.1667 33.6667 26.7631 33.6667 33.6667'
      stroke='#666666'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(EcommerceUserIcon);
export { Memo as EcommerceUserIcon };
