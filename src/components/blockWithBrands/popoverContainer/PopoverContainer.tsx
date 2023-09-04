import React from 'react';

import {CustomButton} from '../../../UI/customButton/CustomButton';
import EvasButton from '../../evas-button/EvasButton';
import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';

import {ReactComponent as ArrowIcon} from '../../../assets/icons/arrow.svg';

import styles from './styles.module.scss';

type Props = {
  title: string;
  description: string;
  variant: ButtonVariant;
  onClick: () => void;
};

export const PopoverContainer: React.FunctionComponent<Props> = ({
  title,
  description,
  variant,
  onClick,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <CustomButton
          className={styles.buttonTablet}
          onClick={onClick}
          variant={variant}
        >
          <ArrowIcon />
        </CustomButton>
      </div>
      <div className={styles.description}>{description}</div>
      <EvasButton variant={variant} onClick={onClick} className={styles.button}>
        <>
          {'Подробнее'}
          <div className={styles.evasBtnArrow}>
            <ArrowIcon />
          </div>
        </>
      </EvasButton>
    </div>
  );
};

export default PopoverContainer;
