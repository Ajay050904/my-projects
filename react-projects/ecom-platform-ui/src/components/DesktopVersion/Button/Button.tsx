import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge.js';
import { BadgeIcon2 } from './BadgeIcon2.js';
import { BadgeIcon } from './BadgeIcon.js';
import classes from './Button.module.css';

interface Props {
  className?: string;
  swap?: {
    badge?: ReactNode;
  };
  hide?: {
    badge?: boolean;
  };
  text?: {
    inputText?: ReactNode;
  };
}
/* @figmaId 1:406 */
export const Button: FC<Props> = memo(function Button(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.badge && (
        <EcommerceBadge
          swap={{
            badge: <BadgeIcon className={classes.icon} />,
          }}
        />
      )}
      {props.text?.inputText != null ? props.text?.inputText : <div className={classes.inputText}>Button</div>}
      {props.swap?.badge || (
        <EcommerceBadge
          swap={{
            badge: <BadgeIcon2 className={classes.icon2} />,
          }}
        />
      )}
    </button>
  );
});
