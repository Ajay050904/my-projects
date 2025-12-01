import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceTruck.module.css';
import { TruckIcon } from './TruckIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    truck?: ReactNode;
  };
}
/* @figmaId 1:445 */
export const EcommerceTruck: FC<Props> = memo(function EcommerceTruck(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.truck}>{props.swap?.truck || <TruckIcon className={classes.icon} />}</div>
    </div>
  );
});
