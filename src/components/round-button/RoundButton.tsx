import React, {ReactElement} from 'react';
import cn from 'classnames';

import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';

import styles from './styles.module.scss';

type EvasButtonProps = {
  isShowBorder?: boolean;
  variant: ButtonVariant;
  onClick: (() => void) | ((e: any) => void);
  children: ReactElement;
  className?: string;
}

export const RoundButton: React.FunctionComponent<EvasButtonProps> = ({
  isShowBorder = false,
  variant,
  onClick,
  children,
  className}) => {
  return (<button
    className={cn(
      className,
      styles.roundBtn,
      `${isShowBorder ? styles.roundBtn__border : styles.roundBtn__background}`,
      {[styles.roundBtnPrimary]: variant === ButtonVariant.Primary},
      {[styles.roundBtnLight]: variant === ButtonVariant.Light},
    )}
    onClick={onClick}>
    <div className={styles.roundBtn__content}>
      {children}
    </div>
  </button>);
};

export default RoundButton;
