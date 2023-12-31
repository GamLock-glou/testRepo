import React from 'react';
import cn from 'classnames';

import {useNavigate} from 'react-router';

import {CustomButton} from '../../../../UI/customButton/CustomButton';
import {ButtonVariant} from '../../../../utils/constants/ButtonVariantEnum';

import {ReactComponent as Arrow} from '../../../../assets/icons/arrow.svg';

import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {getActiveStoryColorsAndPath, hideStories} from '../../../../redux/stories/storiesSlice';

import {ColorVariant} from '../../../../utils/enum/enum';

import styles from './styles.module.scss';

export const ContentStory = () => {
  const dispatch = useAppDispatch();
  const activeStory = useAppSelector((state) => state.storiesSlice.activeStory);
  const {button, text, product, line} = useAppSelector(getActiveStoryColorsAndPath(activeStory));
  const navigate = useNavigate();
  const onClickLine = () => {
    if(line) {
      dispatch(hideStories());
      navigate(line);
    }
  };
  const onClickProduct = () => {
    if(product) {
      dispatch(hideStories());
      navigate(product);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.text}>
          <div className={styles.line}>линейка</div>
          <div
            className={cn(styles.titleName, {
              [styles.portage]: text === ColorVariant.Portage,
              [styles.aquaForest]: text === ColorVariant.AquaForest,
              [styles.greenSmoke]: text === ColorVariant.GreenSmoke,
              [styles.indigo]: text === ColorVariant.Indigo,
              [styles.newYorkPink]: text === ColorVariant.NewYorkPink,
              [styles.ronchi]: text === ColorVariant.Ronchi,
            })}
          >
            Retin Collagen 3D Core
          </div>
        </div>
        <div className={styles.btn}>
          <CustomButton
            variant={button || ButtonVariant.WhitePortage}
            onClick={onClickLine}
          >
            <Arrow />
          </CustomButton>
        </div>
      </div>
      <div className={styles.productWrapper}>
        <div className={styles.productTitle}>продукт</div>
        <div className={styles.productLink}>
          <div
            className={cn(styles.titleLink, {
              [styles.portage]: text === ColorVariant.Portage,
              [styles.aquaForest]: text === ColorVariant.AquaForest,
              [styles.greenSmoke]: text === ColorVariant.GreenSmoke,
              [styles.indigo]: text === ColorVariant.Indigo,
              [styles.newYorkPink]: text === ColorVariant.NewYorkPink,
              [styles.ronchi]: text === ColorVariant.Ronchi,
            })}
          >
            <div>Eye Core Cleansing Foam</div>
            <div>Number One</div>
          </div>
          <div className={styles.btnLink}>
            <CustomButton
              variant={button || ButtonVariant.WhitePortage}
              onClick={onClickProduct}
            >
              <Arrow />
            </CustomButton>
          </div>
        </div>
      </div>
      <div className={styles.textWrapper}>
        Нежный очищающий гель для умывания на основе аминокислот. Мягко очищает
        кожу, не оставляя чувство стянутости.
      </div>
    </div>
  );
};
