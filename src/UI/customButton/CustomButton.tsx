import React, {ReactElement} from 'react';
import cn from 'classnames';

import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';

import styles from './styles.module.scss';

type CustomButtonProps = {
  children?: ReactElement | string;
  className?: string;
  onClick: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant: ButtonVariant;
  disabled?: boolean;
};

const variantsStyle: Partial<Record<ButtonVariant, string>> = {
  [ButtonVariant.Primary]: styles.evasBtnPrimary,
  [ButtonVariant.OutLine]: styles.evasBtnOutLine,
  [ButtonVariant.Light]: styles.evasBtnLight,
  [ButtonVariant.WhiteDolphin]: styles.evasBtnWhiteDolphin,
  [ButtonVariant.WhitePortage]: styles.evasBtnWhitePortage,
  [ButtonVariant.WhiteAquaForest]: styles.evasBtnWhiteAquaForest,
  [ButtonVariant.WhiteGreenSmoke]: styles.evasBtnWhiteGreenSmoke,
  [ButtonVariant.WhiteIndigo]: styles.evasBtnWhiteIndigo,
  [ButtonVariant.WhiteNewYorkPink]: styles.evasBtnWhiteNewYorkPink,
  [ButtonVariant.WhiteRonchi]: styles.evasBtnRonchi,
  [ButtonVariant.AquaForest]: styles.evasBtnAquaForest,
  [ButtonVariant.GreenSmoke]: styles.evasBtnGreenSmoke,
  [ButtonVariant.Indigo]: styles.evasBtnIndigo,
  [ButtonVariant.NewYorkPink]: styles.evasBtnNewYorkPink,
  [ButtonVariant.Ronchi]: styles.evasBtnRonchi,
  [ButtonVariant.WhiteLilac]: styles.evasBtnWhiteLilac,
  [ButtonVariant.BlueGem]: styles.evasBtnBlueGem,
};

export const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  children,
  className,
  variant,
  onClick,
  disabled = false,
}) => {
  return (
    <button
      className={cn(className, styles.container, variantsStyle[variant])}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
