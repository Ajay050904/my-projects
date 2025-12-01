import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './EcommerceSearch.module.css';
import { EcommerceSearchIcon } from './EcommerceSearchIcon.js';

interface Props {
  className?: string;
  classes?: {
    icon?: string;
    root?: string;
  };
  swap?: {
    icon?: ReactNode;
  };
}
/* @figmaId 1:397 */
export const EcommerceSearch: FC<Props> = memo(function EcommerceSearch(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.icon || ''} ${classes.icon}`}>
        {props.swap?.icon || <EcommerceSearchIcon className={classes.icon2} />}
      </div>
    </div>
  );
});
