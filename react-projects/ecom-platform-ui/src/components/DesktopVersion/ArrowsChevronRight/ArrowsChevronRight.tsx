import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './ArrowsChevronRight.module.css';
import { ArrowsChevronRightIcon } from './ArrowsChevronRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:410 */
export const ArrowsChevronRight: FC<Props> = memo(function ArrowsChevronRight(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <ArrowsChevronRightIcon className={classes.icon2} />}</div>
    </div>
  );
});
