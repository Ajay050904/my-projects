import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceMyOrders.module.css';
import { EcommerceMyOrdersIcon } from './EcommerceMyOrdersIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:447 */
export const EcommerceMyOrders: FC<Props> = memo(function EcommerceMyOrders(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <EcommerceMyOrdersIcon className={classes.icon2} />}</div>
    </div>
  );
});
