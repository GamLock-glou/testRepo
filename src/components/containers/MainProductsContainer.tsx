import React from 'react';

import {MainProductMobile} from '../adaptive/mainProductMobile/MainProductMobile';
import {MainProducts} from '../mainProducts/MainProducts';

type Props = {
  handleClickScroll: () => void;
}

const MainProductsContainer: React.FunctionComponent<Props> = ({handleClickScroll}) => {
  return (
    <>
      <MainProducts handleClickScroll={handleClickScroll} />
      <MainProductMobile handleClickScroll={handleClickScroll} />
    </>
  );
};

export default React.memo(MainProductsContainer);
