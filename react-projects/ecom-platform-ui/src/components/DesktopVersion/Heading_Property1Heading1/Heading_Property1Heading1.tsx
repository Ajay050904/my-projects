import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './Heading_Property1Heading1.module.css';

interface Props {
  className?: string;
  text?: {
    writeTitleHere?: ReactNode;
  };
}
/* @figmaId 1:400 */
export const Heading_Property1Heading1: FC<Props> = memo(function Heading_Property1Heading1(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      {props.text?.writeTitleHere != null ? (
        props.text?.writeTitleHere
      ) : (
        <div className={classes.writeTitleHere}>Write Title Here</div>
      )}
      <div className={classes.rectangle1}></div>
    </div>
  );
});
