import { memo, SVGProps } from 'react';

const EcommerceIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M7.99486 1.93013C6.49535 0.182611 3.99481 -0.287465 2.11602 1.31274C0.237233 2.91294 -0.0272741 5.58839 1.44815 7.48095C2.67486 9.05449 6.38733 12.3732 7.60407 13.4473C7.7402 13.5675 7.80827 13.6276 7.88766 13.6512C7.95695 13.6718 8.03277 13.6718 8.10207 13.6512C8.18146 13.6276 8.24952 13.5675 8.38565 13.4473C9.6024 12.3732 13.3149 9.05449 14.5416 7.48095C16.017 5.58839 15.7848 2.8961 13.8737 1.31274C11.9626 -0.270632 9.49438 0.182611 7.99486 1.93013Z'
      stroke='#737373'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const Memo = memo(EcommerceIcon);
export { Memo as EcommerceIcon };
