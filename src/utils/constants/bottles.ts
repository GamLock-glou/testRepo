import bottle1 from '../../assets/images/bottle1.png';
import bottle2 from '../../assets/images/bottle2.png';
import bottle3 from '../../assets/images/bottle3.png';
import bottle4 from '../../assets/images/bottle4.png';
import bottle5 from '../../assets/images/bottle5.png';
import bottle6 from '../../assets/images/bottle6.png';
import backgroundBottle1 from '../../assets/images/backgroundForBottle/backgroundBottle1.png';
import backgroundBottle2 from '../../assets/images/backgroundForBottle/backgroundBottle2.png';
import backgroundBottle3 from '../../assets/images/backgroundForBottle/backgroundBottle3.png';
import backgroundBottle4 from '../../assets/images/backgroundForBottle/backgroundBottle4.png';
import backgroundBottle5 from '../../assets/images/backgroundForBottle/backgroundBottle5.png';
import backgroundBottle6 from '../../assets/images/backgroundForBottle/backgroundBottle6.png';
import productLine1 from '../../assets/images/productLinePopover/productLine1.png';
import productLine2 from '../../assets/images/productLinePopover/productLine2.png';
import productLine3 from '../../assets/images/productLinePopover/productLine3.png';
import productLine4 from '../../assets/images/productLinePopover/productLine4.png';
import productLine5 from '../../assets/images/productLinePopover/productLine5.png';
import productLine6 from '../../assets/images/productLinePopover/productLine6.png';
import {ButtonVariant} from '../../utils/constants/ButtonVariantEnum';
import {ColorVariant} from '../enum/enum';
import {IBottle} from '../types/types';

import {allProductsLines} from './linesWithBrands';
import {PATH} from './routeConstants';

export const bottles: IBottle[] = [
  {
    bottleUrl: bottle1,
    popoverValues: {
      buttonColor: ButtonVariant.NewYorkPink,
      textColor: ColorVariant.NewYorkPink,
      productLineUrl: productLine1,
    },
    path: `/${PATH.lines.biome5lacto}/${PATH.biome5lactoLine.product2}`,
    background: {
      url: backgroundBottle1,
      color: '#D97D74',
    },
    popoverStyle: {position: 'absolute', left: '50%', bottom: '30%'},
  },
  {
    bottleUrl: bottle2,
    popoverValues: {
      buttonColor: ButtonVariant.Indigo,
      textColor: ColorVariant.Indigo,
      productLineUrl: productLine2,
    },
    path: `/${PATH.lines.proMoisture}/${PATH.proMoistureLine.product1}`,
    background: {
      url: backgroundBottle2,
      color: '#617EC1',
    },
    popoverStyle: {position: 'absolute', left: '80%', bottom: '30%'},
  },
  {
    bottleUrl: bottle3,
    popoverValues: {
      buttonColor: ButtonVariant.AquaForest,
      textColor: ColorVariant.AquaForest,
      productLineUrl: productLine3,
    },
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product3}`,
    background: {
      url: backgroundBottle3,
      color: '#609A6F',
    },
    popoverStyle: {position: 'absolute', left: '70%', bottom: '25%'},
  },
  {
    bottleUrl: bottle4,
    popoverValues: {
      buttonColor: ButtonVariant.GreenSmoke,
      textColor: ColorVariant.GreenSmoke,
      productLineUrl: productLine4,
    },
    path: `/${PATH.lines.heartLeaf}/${PATH.heartLeafLine.product3}`,
    background: {
      url: backgroundBottle4,
      color: '#A0B264',
    },
    popoverStyle: {position: 'absolute', left: '70%', bottom: '25%'},
  },
  {
    bottleUrl: bottle5,
    popoverValues: {
      buttonColor: ButtonVariant.Primary,
      textColor: ColorVariant.Portage,
      productLineUrl: productLine5,
    },
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product5}`,
    background: {
      url: backgroundBottle5,
      color: '#9996ef',
    },
    popoverStyle: {position: 'absolute', left: '15%', bottom: '25%'},
  },
  {
    bottleUrl: bottle6,
    popoverValues: {
      buttonColor: ButtonVariant.Ronchi,
      textColor: ColorVariant.Ronchi,
      productLineUrl: productLine6,
    },
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product6}`,
    background: {
      url: backgroundBottle6,
      color: '#E8BF56',
    },
    popoverStyle: {position: 'absolute', left: '-10%', bottom: '25%'},
  },
];
