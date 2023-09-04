import React, {useRef} from 'react';

import MainProductsContainer from '../../components/containers/MainProductsContainer';
import BlockWithBrands from '../../components/blockWithBrands/BlockWithBrands';
import {CompositionOfProducts} from '../../components/compositionOfProducts/CompositionOfProducts';
import {Stories} from '../../components/adaptive/stories/Stories';

import {useAppSelector} from '../../redux/hooks';

import styles from './styles.module.scss';


export const Fraijour: React.FunctionComponent = () => {
  const isShowStories = useAppSelector(state => state.storiesSlice.isShowStories);
  const ref = useRef<HTMLDivElement>(null);
  const handleClick = () => {
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };
  return (
    <div className={styles.main}>
      <MainProductsContainer handleClickScroll={handleClick} />
      <CompositionOfProducts />
      <div ref={ref} className={styles.allBrands}>
        <BlockWithBrands/>
      </div>
      {isShowStories && <Stories />}
    </div>
  );
};

export default Fraijour;
