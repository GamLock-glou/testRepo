import React, {useCallback, useEffect} from 'react';
import cn from 'classnames';

import {CustomButton} from '../../../UI/customButton/CustomButton';
import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';
import {Steps} from '../../steps/Steps';

import {ReactComponent as Cross} from '../../../assets/icons/cross.svg';

import {useAppDispatch} from '../../../redux/hooks';

import {checkoutStory, hideStories} from '../../../redux/stories/storiesSlice';

import {BodyStory} from './bodyStory/BodyStory';

import styles from './styles.module.scss';

export const Stories = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      dispatch(checkoutStory(0));
      document.body.style.overflowY = 'scroll';
    };
  }, [dispatch]);
  const handleClick = useCallback(() => {
    dispatch(hideStories());
  }, [dispatch]);
  return (
    <div className={cn(styles.container)}>
      <div className={styles.header}>
        <Steps />
        <div className={styles.btnClose}>
          <CustomButton
            onClick={handleClick}
            variant={ButtonVariant.OutLine}
          >
            <Cross />
          </CustomButton>
        </div>
      </div>
      <BodyStory />
    </div>
  );
};
