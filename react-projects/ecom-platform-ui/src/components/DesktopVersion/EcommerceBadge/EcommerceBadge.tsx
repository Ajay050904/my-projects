import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { BadgeIcon } from './BadgeIcon.js';
import classes from './EcommerceBadge.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
    badge?: string;
  };
  swap?: {
    badge?: ReactNode;
  };
}
/* @figmaId 1:5 */
export const EcommerceBadge: FC<Props> = memo(function EcommerceBadge(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.badge || ''} ${classes.badge}`}>
        {props.swap?.badge || <BadgeIcon className={classes.icon} />}
      </div>
    </div>
  );
});
