import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 11 19' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M9.43669 10.2687L9.93106 7.04732H6.84005V4.95687C6.84005 4.07556 7.27184 3.2165 8.6562 3.2165H10.0614V0.47384C10.0614 0.47384 8.78623 0.256207 7.567 0.256207C5.02146 0.256207 3.35757 1.79911 3.35757 4.59218V7.04732H0.528V10.2687H3.35757V18.0562H6.84005V10.2687H9.43669Z'
      fill='#666666'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
