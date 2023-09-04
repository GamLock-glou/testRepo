import React, {useState} from 'react';
import cn from 'classnames';
import {useNavigate} from 'react-router-dom';

import {allProductsLines, PRODUCTS_LINES} from '../../utils/constants/linesWithBrands';
import {IProduct} from '../../utils/types/types';

import {ReactComponent as TickDown} from '../../assets/icons/tickDown.svg';
import {ReactComponent as TickUp} from '../../assets/icons/tickUp.svg';

import EvasButton from '../evas-button/EvasButton';
import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';

import LinesList from './linesList/LinesList';
import ProductsList from './productsList/ProductsList';

import RetineCollagenLine from './retineCollagenLine/RetineCollagenLine';
import YuzuHoneyLine from './yuzuHoneyLine/YuzuHoneyLine';
import BiomeLactoLine from './biomeLactoLine/BiomeLactoLine';
import ProMoistureLine from './proMoistureLine/ProMoistureLine';
import OriginalHerbWormwoodLine from './originalHerbWormwoodLine/OriginalHerbWormwood';
import HeartleafBlemishLine from './heartleafBlemishLine/HeartleafBlemishLine';

import styles from './styles.module.scss';

export const BlockWithBrands: React.FunctionComponent = () => {
  const clickOnLine = (index: number)=> {
    setActiveLine(index);
    setProductsList(productLines[index].products);
    setActiveProduct(-1);
  };

  const productLines = PRODUCTS_LINES.map((line, linesIndex) => {
    return {title: line.title,
      desciprtion: line.desciprtion,
      path: line.path,
      products: line.products.map((product, productsIndex) => {
        return {...product, onClick: ()=>{setActiveProduct(productsIndex);}};}),
      onClick: ()=> {clickOnLine(linesIndex);}};
  });

  const [activeLine, setActiveLine] = useState<number>(0);
  const [productsList, setProductsList] = useState<IProduct[]>(productLines[0].products);
  const [activeProduct, setActiveProduct] = useState<number>(-1);
  const [isOpenDescription, setIsOpenDescription] = useState(false);
  const [isOpenProducts, setIsOpenProducts] = useState(false);
  const navigate = useNavigate();

  const handleClickWatchLineProduct = () => {
    navigate(`${productLines[activeLine].path}`);
  };

  function changeDescription(){
    setIsOpenDescription(!isOpenDescription);
    setIsOpenProducts(false);
  }

  function changeProducts(){
    setIsOpenProducts(!isOpenProducts);
    setIsOpenDescription(false);
  }

  function selectProductsBlock(){
    switch (productLines[activeLine].title) {
    case allProductsLines.RetineCollagen3DCore:
      return <RetineCollagenLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.HeartleafBlemish:
      return <HeartleafBlemishLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.ProMoisture:
      return <ProMoistureLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.BiomeLacto:
      return <BiomeLactoLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.YuzuHoney:
      return <YuzuHoneyLine
        activeProduct={activeProduct}
        products={productsList}/>;
    case allProductsLines.OriginalHerbWormwood:
      return <OriginalHerbWormwoodLine
        activeProduct={activeProduct}
        products={productsList}/>;
    }
  }

  return (<>
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <LinesList lines={productLines} activeLine={activeLine}/>
        <div className={styles.productsBlock}>
          <div className={styles.title}>
          Описание линейки _
          </div>
          <div className={styles.description}>
            {productLines[activeLine].desciprtion}
          </div>
          <div className={styles.descriptionTablet}>
            <div className={cn(isOpenDescription && styles.titleTabletActive, styles.titleTablet)}>
              <div>Описание линейки _</div>
              <button
                onClick={changeDescription}
                className={cn(isOpenDescription && styles.openButtonActive, styles.openButton)}>
                {isOpenDescription? <TickUp/>: <TickDown/>}
              </button>
            </div>
            <div className={isOpenDescription ? styles.textTablet : styles.hide}>
              {productLines[activeLine].desciprtion}
            </div>
          </div>
          <ProductsList
            products={productsList}
            activeProduct={activeProduct}
            changeProducts={changeProducts}
            isOpen={isOpenProducts}/>
        </div>
      </div>
      <div className={styles.allProducts}>
        {selectProductsBlock()}
        <EvasButton
          variant={ButtonVariant.Black}
          onClick={handleClickWatchLineProduct}
          className={styles.buttonOpenLine}>
          {'Смотреть линейку'}
        </EvasButton>
      </div>
    </div>
    <div className={styles.containerMobile}>
      <LinesList lines={productLines} activeLine={activeLine}/>
      <div className={styles.allProducts}>
        {selectProductsBlock()}
        <EvasButton
          variant={ButtonVariant.Black}
          onClick={handleClickWatchLineProduct}
          className={styles.buttonOpenLine}>
          {'Смотреть линейку'}
        </EvasButton>
      </div>
      <ProductsList
        products={productsList}
        activeProduct={activeProduct}
        changeProducts={changeProducts}
        isOpen={isOpenProducts}/>
    </div>
  </>);
};

export default BlockWithBrands;
