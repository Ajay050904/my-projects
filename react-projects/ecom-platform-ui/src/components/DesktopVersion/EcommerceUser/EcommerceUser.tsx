import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceUser.module.css';
import { EcommerceUserIcon } from './EcommerceUserIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:395 */
export const EcommerceUser: FC<Props> = memo(function EcommerceUser(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <EcommerceUserIcon className={classes.icon2} />}</div>
    </div>
  );
});
