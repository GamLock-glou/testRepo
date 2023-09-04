import React from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {ColorVariant} from '../../../utils/enum/enum';

import EvasButton from '../../evas-button/EvasButton';

import {ReactComponent as ArrowIcon} from '../../../assets/icons/arrow.svg';

import {IPopover} from '../../../utils/types/types';

import {useImagePreloader} from '../../../utils/hooks/useImagePreloader';

import {Preloader} from '../../preloader/Preloader';

import styles from './styles.module.scss';

type ProductPopoverContainerProps = {
  popover: IPopover;
  path: string;
};

export const ProductPopoverContainer: React.FunctionComponent<
  ProductPopoverContainerProps
> = ({popover, path}) => {
  const {
    productLineUrl,
    textColor,
    buttonColor,
  } = popover;
  const navigate = useNavigate();
  const {isPreloaded} = useImagePreloader([productLineUrl]);
  const handleClick = () => {
    navigate(path);
  };
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        {isPreloaded && <img src={productLineUrl} alt="" className={styles.imgWrapper} />}
        <div className={styles.titleText}>
          <div className={styles.lineText}>линейка</div>
          <div className={styles.titleNameText}>Collagen 3D Core</div>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div
          className={cn(styles.productText, {
            [styles.textNewYorkPink]: textColor === ColorVariant.NewYorkPink,
            [styles.textIndigo]: textColor === ColorVariant.Indigo,
            [styles.textAquaForest]: textColor === ColorVariant.AquaForest,
            [styles.textGreenSmoke]: textColor === ColorVariant.GreenSmoke,
            [styles.textPortage]: textColor === ColorVariant.Portage,
            [styles.textRonchi]: textColor === ColorVariant.Ronchi,
          })}
        >
          продукт
        </div>
        <div className={styles.productNameText}>Eye Core Cleansing Foam</div>
        <div className={styles.productInfoText}>
          Нежный очищающий гель для умывания на основе аминокислот. Мягко
          очищает кожу, не оставляя чувство стянутости.
        </div>
        <EvasButton
          className={styles.btn}
          variant={buttonColor}
          onClick={handleClick}
        >
          <>
            {'Подробнее'}
            <div className={styles.evasBtnArrow}>
              <ArrowIcon />
            </div>
          </>
        </EvasButton>
      </div>
    </div>
  );
};
