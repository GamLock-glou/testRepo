import React from 'react';
import {useParams} from 'react-router-dom';

import {ParamTypes} from '../../utils/types/types';

import styles from './styles.module.scss';

export const LineProduct: React.FunctionComponent = () => {
  const params = useParams<ParamTypes>();
  return (
    <div className={styles.main}>
      Line Product: {params.lineProduct}
    </div>
  );
};

export default LineProduct;
