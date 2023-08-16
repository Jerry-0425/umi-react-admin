import classNames from 'classnames';
import React, { CSSProperties, forwardRef } from 'react';

import styles from './Action.module.css';

export interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  active?: {
    fill: string;
    background: string;
  };
  cursor?: CSSProperties['cursor'];
}

export const Action = forwardRef<HTMLButtonElement, Props>(
  ({ active, className, cursor, style, ...props }, ref) => {
    return (
      // eslint-disable-next-line react/button-has-type
      <button
        ref={ref}
        {...props}
        className={classNames(styles.Action, className)}
        tabIndex={0}
        style={
          {
            ...style,
            cursor,
            '--fill': active?.fill,
            '--background': active?.background,
          } as CSSProperties
        }
      />
    );
  },
);
