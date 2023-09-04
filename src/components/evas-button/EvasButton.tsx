import React, {ReactElement} from 'react';
import cn from 'classnames';

import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';

import styles from './styles.module.scss';

type EvasButtonProps = {
  variant: ButtonVariant;
  className?: string;
  disabled?: boolean;
  children: ReactElement | string;
  onClick: () => void;
}

export const EvasButton: React.FunctionComponent<EvasButtonProps> = ({
  variant,
  className,
  children,
  disabled = false,
  onClick}) => {
  return (<button
    className={cn(
      className,
      styles.evasBtn,
      {
        [styles.evasBtnNewYorkPink]: variant === ButtonVariant.NewYorkPink,
        [styles.evasBtnIndigo]: variant === ButtonVariant.Indigo,
        [styles.evasBtnAquaForest]: variant === ButtonVariant.AquaForest,
        [styles.evasBtnGreenSmoke]: variant === ButtonVariant.GreenSmoke,
        [styles.evasBtnPrimary] : variant === ButtonVariant.Primary,
        [styles.evasBtnRonchi]: variant === ButtonVariant.Ronchi,
        [styles.evasBtnWhite]: variant === ButtonVariant.White,
        [styles.evasBtnBlack]: variant === ButtonVariant.Black,
        [styles.evasBtnTransparent]: variant === ButtonVariant.Transparent,
      },
    )}
    disabled={disabled}
    onClick={onClick}>
    {children}
  </button>);
};

export default EvasButton;
