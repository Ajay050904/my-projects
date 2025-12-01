import { memo, SVGProps } from 'react';

const EcommerceUserIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M7 8.66667C9.30119 8.66667 11.1667 6.80119 11.1667 4.5C11.1667 2.19881 9.30119 0.333333 7 0.333333C4.69881 0.333333 2.83333 2.19881 2.83333 4.5C2.83333 6.80119 4.69881 8.66667 7 8.66667ZM7 8.66667C3.3181 8.66667 0.333333 10.9052 0.333333 13.6667M7 8.66667C10.6819 8.66667 13.6667 10.9052 13.6667 13.6667'
      stroke='#666666'
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

const Memo = memo(EcommerceUserIcon);
export { Memo as EcommerceUserIcon };
