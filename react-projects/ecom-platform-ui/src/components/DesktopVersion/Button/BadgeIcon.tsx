import { memo, SVGProps } from 'react';

const BadgeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0 3C0 1.34315 1.34315 0 3 0H12C13.6569 0 15 1.34315 15 3V12C15 13.6569 13.6569 15 12 15H3C1.34315 15 0 13.6569 0 12V3Z'
      fill='white'
    />
  </svg>
);

const Memo = memo(BadgeIcon);
export { Memo as BadgeIcon };
