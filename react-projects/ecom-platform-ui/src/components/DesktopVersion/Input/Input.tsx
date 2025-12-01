import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge.js';
import classes from './Input.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    badge?: ReactNode;
    badge2?: ReactNode;
  };
  hide?: {
    badge?: boolean;
    iconText?: boolean;
  };
  text?: {
    inputText?: ReactNode;
  };
}
/* @figmaId 1:390 */
export const Input: FC<Props> = memo(function Input(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {!props.hide?.iconText && (
        <div className={classes.iconText}>
          {props.swap?.badge || <EcommerceBadge />}
          {props.text?.inputText != null ? props.text?.inputText : <div className={classes.inputText}>Placeholder</div>}
        </div>
      )}
      {!props.hide?.badge && (props.swap?.badge2 || <EcommerceBadge className={classes.badge} />)}
    </div>
  );
});
