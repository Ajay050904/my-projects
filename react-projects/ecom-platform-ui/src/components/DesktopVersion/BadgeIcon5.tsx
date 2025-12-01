import { memo, SVGProps } from 'react';

const BadgeIcon5 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.25 0.75L3.55806 4.05806C3.80214 4.30214 3.80214 4.69786 3.55806 4.94194L0.25 8.25'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(BadgeIcon5);
export { Memo as BadgeIcon5 };
