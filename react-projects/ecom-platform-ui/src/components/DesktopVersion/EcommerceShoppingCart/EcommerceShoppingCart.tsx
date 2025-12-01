import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceShoppingCart.module.css';
import { EcommerceShoppingCartIcon } from './EcommerceShoppingCartIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:42 */
export const EcommerceShoppingCart: FC<Props> = memo(function EcommerceShoppingCart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <EcommerceShoppingCartIcon className={classes.icon2} />}</div>
    </div>
  );
});
