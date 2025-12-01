import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heading_Property1Heading2.module.css';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  text?: {
    writeTitleHere?: ReactNode;
  };
}
/* @figmaId 1:403 */
export const Heading_Property1Heading2: FC<Props> = memo(function Heading_Property1Heading2(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      {props.text?.writeTitleHere != null ? (
        props.text?.writeTitleHere
      ) : (
        <div className={classes.writeTitleHere}>Write Title Here</div>
      )}
      <div className={classes.rectangle1}></div>
    </div>
  );
});
