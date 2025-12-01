import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import classes from './SocialMediaLinkdin.module.css';

interface Props {
  className?: string;
}
/* @figmaId 1:451 */
export const SocialMediaLinkdin: FC<Props> = memo(function SocialMediaLinkdin(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.rectangle73}></div>
      <div className={classes.in}>in</div>
    </div>
  );
});
