import React from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type PreloaderProps = {
  className?: string;
}

export const Preloader: React.FunctionComponent<PreloaderProps> = ({className}) => {
  return (
    <div
      className={cn(className, styles.preloader)}
    />
  );
};
