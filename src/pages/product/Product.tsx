import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';

import {useAppDispatch} from '../../redux/hooks';

import {ParamTypes} from '../../utils/types/types';

import {CardProduct} from '../../components/cardProduct/CardProduct';

import {getProduct} from '../../redux/content/contentThunks';

import styles from './styles.module.scss';

export const Product: React.FunctionComponent = () => {
  const {lineProduct, product} = useParams<ParamTypes>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProduct({lineProduct, product}));
  }, []);

  return (
    <div className={styles.main}>
      <CardProduct />
    </div>
  );
};

export default Product;
