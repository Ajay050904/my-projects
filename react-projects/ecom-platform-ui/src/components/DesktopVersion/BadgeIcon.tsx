import { memo, SVGProps } from 'react';

const BadgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 11' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.5 6.75C7.22589 6.75 8.625 5.35089 8.625 3.625C8.625 1.89911 7.22589 0.5 5.5 0.5C3.77411 0.5 2.375 1.89911 2.375 3.625C2.375 5.35089 3.77411 6.75 5.5 6.75ZM5.5 6.75C2.73858 6.75 0.5 8.42893 0.5 10.5M5.5 6.75C8.26142 6.75 10.5 8.42893 10.5 10.5'
      stroke='#666666'
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(BadgeIcon);
export { Memo as BadgeIcon };
