import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 7 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M5.95779 6.84581L6.28737 4.69822H4.2267V3.30458C4.2267 2.71704 4.51456 2.14433 5.43747 2.14433H6.37429V0.315894C6.37429 0.315894 5.52415 0.170805 4.71133 0.170805C3.0143 0.170805 1.90505 1.1994 1.90505 3.06145V4.69822H0.0186663V6.84581H1.90505V12.0375H4.2267V6.84581H5.95779Z'
      fill='#666666'
    />
  </svg>
);

const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
