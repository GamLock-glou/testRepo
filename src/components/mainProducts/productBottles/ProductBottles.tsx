import React, {useCallback} from 'react';
import cn from 'classnames';

import ProductBottle from '../productBottle/ProductBottle';

import {IBottle} from '../../../utils/types/types';

import styles from './styles.module.scss';

type ProductBottlesProps = {
  activeProduct: number;
  setActiveProduct: (value: number) => void;
  bottles: IBottle[];
  isActive: boolean;
};

export const ProductBottles: React.FunctionComponent<ProductBottlesProps> = ({
  activeProduct,
  setActiveProduct,
  bottles,
  isActive,
}) => {
  const setActiveProductCallback = useCallback(setActiveProduct, [setActiveProduct]);
  return (
    <div className={styles.container}>
      <div className={cn(styles.wrapper, {
        [styles.active]: isActive,
      })}>
        {bottles.map((bottle, index) => (
          <ProductBottle
            key={index}
            bottle={bottle}
            index={index}
            setActiveProduct={setActiveProductCallback}
          />
        ))}
      </div>
    </div>
  );
};
