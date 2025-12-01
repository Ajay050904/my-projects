import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceFreeShippingReturns.module.css';
import { FreeShippingReturnsIcon } from './FreeShippingReturnsIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    freeShippingReturns?: ReactNode;
  };
}
/* @figmaId 1:449 */
export const EcommerceFreeShippingReturns: FC<Props> = memo(function EcommerceFreeShippingReturns(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.freeShippingReturns}>
        {props.swap?.freeShippingReturns || <FreeShippingReturnsIcon className={classes.icon} />}
      </div>
    </div>
  );
});
