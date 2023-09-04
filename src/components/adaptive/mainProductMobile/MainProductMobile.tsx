import React from 'react';

import {ReactComponent as ArrowToDown} from '../../../assets/icons/arrowToDown.svg';
import backgroundMobile from '../../../assets/images/mainBackgroundMobile.png';

import {TitleProduct} from '../../titleProduct/TitleProduct';
import RoundButton from '../../round-button/RoundButton';
import EvasButton from '../../evas-button/EvasButton';
import {Preloader} from '../../preloader/Preloader';

import {useAppDispatch} from '../../../redux/hooks';
import {showStories} from '../../../redux/stories/storiesSlice';

import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';

import {useImagePreloader} from '../../../utils/hooks/useImagePreloader';

import styles from './styles.module.scss';

type MainProductsMobileProps = {
  handleClickScroll: () => void;
};

export const MainProductMobile: React.FC<MainProductsMobileProps> = ({
  handleClickScroll,
}) => {
  const dispatch = useAppDispatch();
  const {isPreloaded} = useImagePreloader([backgroundMobile], 500);
  const handleClick = () => {
    dispatch(showStories());
  };
  if(!isPreloaded) {
    return <Preloader className={styles.preloader} />;
  }
  return (
    <div className={styles.container}>
      <TitleProduct />
      <div className={styles.wrapperBtn}>
        <RoundButton
          variant={ButtonVariant.Primary}
          onClick={handleClickScroll}
        >
          <ArrowToDown />
        </RoundButton>
      </div>
      <EvasButton
        className={styles.btn}
        variant={ButtonVariant.White}
        onClick={handleClick}
      >
        {'Смотреть продукты'}
      </EvasButton>
    </div>
  );
};
