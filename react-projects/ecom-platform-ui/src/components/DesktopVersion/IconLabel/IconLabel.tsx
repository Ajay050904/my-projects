import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge.js';
import classes from './IconLabel.module.css';

interface Props {
  className?: string;
  swap?: {
    badge?: ReactNode;
  };
  text?: {
    inputText?: ReactNode;
  };
}
/* @figmaId 1:383 */
export const IconLabel: FC<Props> = memo(function IconLabel(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.swap?.badge || <EcommerceBadge />}
      {props.text?.inputText != null ? props.text?.inputText : <div className={classes.inputText}>Placeholder</div>}
    </div>
  );
});
