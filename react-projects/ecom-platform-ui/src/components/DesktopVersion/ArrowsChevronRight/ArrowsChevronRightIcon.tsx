import { memo, SVGProps } from 'react';

const ArrowsChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 5 10' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M0.333333 0L4.74408 4.41074C5.06951 4.73618 5.06951 5.26382 4.74408 5.58926L0.333333 10'
      stroke='#666666'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(ArrowsChevronRightIcon);
export { Memo as ArrowsChevronRightIcon };
