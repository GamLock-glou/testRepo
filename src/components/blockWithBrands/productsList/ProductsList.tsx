import React, {useEffect, useState} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router';

import ButtonWithActive from '../../buttonWithActive/ButtonWithActive';

import {ReactComponent as TickDown} from '../../../assets/icons/tickDown.svg';
import {ReactComponent as TickUp} from '../../../assets/icons/tickUp.svg';
import {ReactComponent as ArrowRight} from '../../../assets/icons/arrowToRight.svg';

import {IProduct} from '../../../utils/types/types';
import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';

import {CustomButton} from '../../../UI/customButton/CustomButton';


import styles from './styles.module.scss';


type ProductsListProps = {
    products: IProduct[];
    activeProduct: number;
    changeProducts: () => void;
    isOpen: boolean;
}

export const ProductsList: React.FunctionComponent<ProductsListProps> = ({
  products,
  activeProduct,
  changeProducts,
  isOpen}) => {
  const [hasProductsScroll, setHasProductsScroll] = useState(false);
  const [hasProductsTabletScroll, setHasProductsTabletScroll] = useState(false);
  const navigate = useNavigate();

  const list = products.map((product, index) => {
    const isActive = activeProduct === index;
    const handlePathClick = () => {
      navigate(product.path);
    };
    return <div key={index} className={styles.productWithBtnWrapper}>
      <ButtonWithActive
        className={styles.product}
        activeClassName={styles.productActive}
        isActive={isActive}
        onClick={product.onClick}
      >
        {`#${index+1} ${product.title}`}
      </ButtonWithActive>
      <CustomButton
        onClick={handlePathClick}
        className={cn(styles.btnLink, {[styles.active]: isActive})}
        variant={ButtonVariant.Primary}
      >
        <ArrowRight />
      </CustomButton>
    </div>;
  });

  useEffect(()=>{
    const productsList = document.getElementById('productsList');
    setHasProductsScroll(productsList ?
      productsList.scrollHeight > productsList.clientHeight : false);
    const productsListTablet = document.getElementById('productsListTablet');
    setHasProductsTabletScroll(productsListTablet ?
      productsListTablet.scrollHeight > productsListTablet.clientHeight : false);
  }, [products]);

  return (<div className={styles.productsList}>
    <div className={styles.title}>Состоит из _</div>
    <div className={cn(isOpen && styles.titleTabletActive, styles.titleTablet)}>
      <div>Состоит из _</div>
      <button
        onClick={changeProducts}
        className={cn(isOpen && styles.openButtonActive, styles.openButton)}>
        {isOpen? <TickUp/>: <TickDown/>}
      </button>
    </div>
    <div className={cn(styles.products, hasProductsScroll && styles.scroll)}>
      <div className={styles.productsScroller} id={'productsList'}>
        {list}
      </div>
    </div>
    <div className={cn(isOpen ? styles.productsTablet : styles.productsTabletClose,
      hasProductsTabletScroll && styles.scroll)}>
      <div className={styles.productsScroller} id={'productsListTablet'}>
        {list}
      </div>
    </div>
    <div className={styles.desciprtion}>
      {products[activeProduct] && products[activeProduct].description}
    </div>
  </div>);
};

export default React.memo(ProductsList);
