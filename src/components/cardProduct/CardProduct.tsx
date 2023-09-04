import React, {useState, useEffect} from 'react';
import cn from 'classnames';

import {useAppSelector} from '../../redux/hooks';

import product1 from '../../assets/images/productsBottles/product1.png';
import {ReactComponent  as ArrowToLeft} from '../../assets/icons/arrowToLeft.svg';
import {ReactComponent  as ArrowToRight} from '../../assets/icons/arrowToRight.svg';

import EvasButton from '../evas-button/EvasButton';
import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';

import {Drawer} from '../drawer/Drawer';

import {InfoProductDrawer} from './infoProductDrawer/InfoProductDrawer';

import styles from './styles.module.scss';

export const CardProduct = () => {
  const product = useAppSelector(state => state.contentSlice.product);

  const productTest = {
    lineName: 'Retin-Collagen 3D Core',
    productName: 'Ampoule Mist',
    content: `Абсолютный уход за кожей: сила синергии 7 
    коллагенов заполняет кожу и повышает
    выработку коллагена`,
    image: product1,
    valume: '200 мл',
    application: `Нанесите необходимое количество крема утром и
     вечером, и аккуратно медленно распределите по всему лицу.`,
    description: 'desc', // надо написать функцию, которая будет
  }; //чекать в тексте br и делать их реальными элементиками

  const [isActiveDescription, setIsActiveDescription] = useState(false);
  const [isActiveApplication, setIsActiveApplication] = useState(false);
  const handleApplicationDrawer = (flag: boolean) => {
    setIsActiveApplication(flag);
  };
  const handleDescriptionDrawer = (flag: boolean) => {
    setIsActiveDescription(flag);
  };

  const handleCloseDrawer = () => {
    setIsActiveDescription(_ => {
      setIsActiveApplication(false);
      return false;
    });
  };
  const handleClickDrawer = () => {
    if(!isActiveApplication || !isActiveDescription) {
      setIsActiveDescription(_ => {
        setIsActiveApplication(true);
        return true;
      });
    }
    else {
      setIsActiveDescription(_ => {
        setIsActiveApplication(false);
        return false;
      });
    }
  };
  const handleEndDrawer = (flag: boolean) => {
    if(flag) {
      setIsActiveApplication(_ => {
        setIsActiveDescription(false);
        return false;
      });
      return;
    }
    setIsActiveApplication(_ => {
      setIsActiveDescription(true);
      return true;
    });
  };
  const infoProductValue = {
    description: {isActiveDescription, handleDescriptionDrawer},
    application: {isActiveApplication, handleApplicationDrawer},
  };

  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        <div className={styles.heading}>
          <EvasButton
            variant={ButtonVariant.Transparent}
            className={styles.backButton}
            onClick={()=>{}}>
            <>
              <ArrowToLeft className={styles.icon}/>
              <span className={styles.text}>назад</span>
            </>
          </EvasButton>
          <div className={styles.title}>
            <div className={styles.line}>
              {productTest.lineName}
            </div>
            <div className={styles.product}>
              {productTest.productName}
            </div>
          </div>
        </div>
        <div className={styles.content}>
          {productTest.content}
        </div>
        <span className={styles.itemsTitle}>Объем</span>
        <div className={styles.valumeValue}>{productTest.valume}</div>
        <div className={styles.research}>
          <span className={styles.itemsTitle}>Доказано испытаниями:</span>
          <EvasButton
            variant={ButtonVariant.Primary}
            className={styles.buttonResearch}
            onClick={()=>{}}>
            <>
              <span>Смотреть результаты испытаний</span>
              <div className={styles.circle}>
                <ArrowToRight className={styles.icon}/>
              </div>
            </>
          </EvasButton>
        </div>
        <div className={styles.titleApplication}>Применение:</div>
        <div className={styles.application}>{productTest.application}</div>
      </div>
      <img src={productTest.image} alt="" className={styles.productImage} />
      <div className={styles.description}>
        <div className={styles.descriptionTitle}>Описание:</div>
        <div className={styles.descriptionText}>
          {`Сделайте кожу более эластичной, используя
            липосомы! Благодаря новому липосомному типу
            ретинола, он воздействует на кожу эффективнее
            и стабильнее, чем ретинол.`}
          <br/><br/>
          {`Наполнение, подтягивание и поддержание
            эластичности кожи благодаря 3 видам
            коллагена Коллаген Attelo, водорастворимый
            коллаген, жирорастворимый коллаген.`}
          <br/><br/>
          {`7 комплексов коллагена, которые впитываются
            непосредственно в кожу
            Микромаломолекулярный коллаген 4-го
            поколения размером с 170 000 волоса глубоко
            впитывается в кожу и удерживает разрушенное
            ядро кожи
            9 видов пептидов.`}
        </div>
      </div>
      <Drawer
        activeBlocks={[isActiveApplication, isActiveDescription]}
        end={handleEndDrawer}
        handleClick={handleClickDrawer}
        className={styles.drawer}
      >
        <InfoProductDrawer values={infoProductValue} handleClose={handleCloseDrawer} />
      </Drawer>
      <div className={cn(styles.navigation, {
        [styles.active]: isActiveDescription || isActiveApplication,
      })}>
        <EvasButton
          variant={ButtonVariant.Transparent}
          onClick={()=>{}}
          className={styles.navigationBtnLeft}>
          <>
            <div className={styles.circleLeft}>
              <ArrowToLeft className={styles.icon}/>
            </div>
            <span className={styles.text}>Предыдущий продукт</span>
          </>
        </EvasButton>
        <EvasButton
          variant={ButtonVariant.Transparent}
          onClick={()=>{}}
          className={styles.navigationBtnRight}>
          <>
            <span className={styles.text}>Следующий продукт</span>
            <div className={styles.circleRight}>
              <ArrowToRight className={styles.icon}/>
            </div>
          </>
        </EvasButton>
      </div>
    </div>
  );
};
