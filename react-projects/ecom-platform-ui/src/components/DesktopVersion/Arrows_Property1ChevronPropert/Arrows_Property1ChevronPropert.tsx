import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Arrows_Property1ChevronPropert.module.css';
import { Property1ChevronProperty2LeftI } from './Property1ChevronProperty2LeftI.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:415 */
export const Arrows_Property1ChevronPropert: FC<Props> = memo(function Arrows_Property1ChevronPropert(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={classes.icon}>
        {props.swap?.icon || <Property1ChevronProperty2LeftI className={classes.icon2} />}
      </div>
    </div>
  );
});
