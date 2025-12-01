import { memo, SVGProps } from 'react';

const ArrowsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 10 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.33333 0L0.511843 8.82149C-0.13903 9.47236 -0.13903 10.5276 0.511843 11.1785L9.33333 20'
      stroke='#737373'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ArrowsIcon);
export { Memo as ArrowsIcon };
