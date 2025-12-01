import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { EcommerceBadge } from '../EcommerceBadge/EcommerceBadge.js';
import { BadgeIcon2 } from './BadgeIcon2.js';
import { BadgeIcon } from './BadgeIcon.js';
import classes from './Button2.module.css';

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
/* @figmaId 1:441 */
export const Button2: FC<Props> = memo(function Button2(props = {}) {
  return (
    <button className={`${resets.clapyResets} ${classes.root}`}>
      {!props.hide?.badge && (
        <EcommerceBadge
          className={classes.badge2}
          classes={{ badge: classes.badge }}
          swap={{
            badge: (
              <div className={classes.badge}>
                <BadgeIcon className={classes.icon} />
              </div>
            ),
          }}
        />
      )}
      {props.text?.inputText != null ? props.text?.inputText : <div className={classes.inputText}>Button</div>}
      {props.swap?.badge || (
        <EcommerceBadge
          className={classes.badge4}
          classes={{ badge: classes.badge3 }}
          swap={{
            badge: (
              <div className={classes.badge3}>
                <BadgeIcon2 className={classes.icon2} />
              </div>
            ),
          }}
        />
      )}
    </button>
  );
});
