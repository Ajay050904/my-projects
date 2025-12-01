import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Ecommerce_Property1Heart.module.css';
import { Property1HeartIcon } from './Property1HeartIcon.js';

interface Props {
  className?: string;
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:22 */
export const Ecommerce_Property1Heart: FC<Props> = memo(function Ecommerce_Property1Heart(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.icon}>{props.swap?.icon || <Property1HeartIcon className={classes.icon2} />}</div>
    </div>
  );
});
