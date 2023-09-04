import {PATH} from './routeConstants';

export enum allProductsLines {
  'RetineCollagen3DCore' = 'Retine-Collagen 3D Core',
  'HeartleafBlemish' = 'heartleaf Blemish',
  'ProMoisture' = 'pro moisture',
  'BiomeLacto' = 'biome 5-lacto',
  'YuzuHoney' = 'yuzu honey',
  'OriginalHerbWormwood' = 'Original herb wormwood',
}

export const RETINE_COLLAGEN_PRODUCTS = [
  {
    title: 'Eye Core Cleansing Foam',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product1}`,
  },
  {
    title: 'Core Toner',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product2}`,
  },
  {
    title: 'Ampoule Mist',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product3}`,
  },
  {
    title: 'Eye Cream',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product4}`,
  },
  {
    title: 'Core Cream',
    description: `Core Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.retinCollagen3dCode}/${PATH.retinCollagen3dCodeLine.product5}`,
  },
];

const HEARTLEAF_BLEMISH_PRODUCTS = [
  {
    title: 'Eye Core R',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.heartLeaf}/${PATH.heartLeafLine.product1}`,
  },
  {
    title: 'Core RIGINAL',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.heartLeaf}/${PATH.heartLeafLine.product2}`,
  },
  {
    title: 'Ampoule ARTEMISIA',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.heartLeaf}/${PATH.heartLeafLine.product3}`,
  },
  {
    title: 'Ampoule csc',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.heartLeaf}/${PATH.heartLeafLine.product4}`,
  },
];

const PRO_MOISTURE_PRODUCTS = [
  {
    title: '1Eye Core PRO MOISTURE',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.proMoisture}/${PATH.proMoistureLine.product1}`,
  },
  {
    title: '2Core PRO MOISTURE',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.proMoisture}/${PATH.proMoistureLine.product2}`,
  },
  {
    title: '3Ampoule PRO MOISTURE',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.proMoisture}/${PATH.proMoistureLine.product3}`,
  },
  {
    title: '4Eye PRO MOISTURE',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.proMoisture}/${PATH.proMoistureLine.product4}`,
  },
];

const BIOME_LACTO_PRODUCTS = [
  {
    title: '1Eye Core BIOME lin',
    description: `Нежный очищающий гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.biome5lacto}/${PATH.biome5lactoLine.product1}`,
  },
  {
    title: '2Core LINE',
    description: `Core Toner для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.biome5lacto}/${PATH.biome5lactoLine.product2}`,
  },
  {
    title: '3Ampoule BIOME LACTO LINE',
    description: `Ampoule Mist для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.biome5lacto}/${PATH.biome5lactoLine.product3}`,
  },
  {
    title: '4Eye BIOME LACTO LINE',
    description: `Eye Cream гель для 
  умывания на основе аминокислот. 
  Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.biome5lacto}/${PATH.biome5lactoLine.product4}`,
  },
];

const YUZU_HONEY_PRODUCTS = [
  {
    title: '1Eye Core YUZU HONEY',
    description: `Нежный очищающий гель для 
      умывания на основе аминокислот. 
      Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product1}`,
  },
  {
    title: '2Core YUZU HONEY',
    description: `Core Toner для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product2}`,
  },
  {
    title: '3Ampoule YUZU HONEY',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product3}`,
  },
  {
    title: '4Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product4}`,
  },
  {
    title: '5Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product5}`,
  },
  {
    title: '6Eye YUZU HONEY',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.yuzuHoney}/${PATH.yuzuHoneyLine.product6}`,
  },
];

const HERB_WORMWOOD_PRODUCTS = [
  {
    title: '1Eye Core HERB WORM',
    description: `Нежный очищающий гель для 
      умывания на основе аминокислот. 
      Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product1}`,
  },
  {
    title: '2Core HERB',
    description: `Core Toner для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product2}`,
  },
  {
    title: '3Ampoule HERB',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product3}`,
  },
  {
    title: '4Eye HERB_',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product4}`,
  },
  {
    title: '5Eye vHERB_WORMWOOD',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product5}`,
  },
  {
    title: '6Eye HERB WORMWOOD',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product6}`,
  },
  {
    title: '7Ampoul',
    description: `Ampoule Mist для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product7}`,
  },
  {
    title: '8Eye HERB ',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product8}`,
  },
  {
    title: '9Eye vHERB',
    description: `Eye Cream гель для 
    умывания на основе аминокислот. 
    Мягко очищает кожу, не оставляя чувство стянутости.`,
    path: `/${PATH.lines.originalHerbWormwood}/${PATH.originalHerbWormwoodLine.product9}`,
  },
];

export const PRODUCTS_LINES = [
  {
    title: allProductsLines.RetineCollagen3DCore,
    desciprtion: `Правильное решение для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: RETINE_COLLAGEN_PRODUCTS,
    path: `/${PATH.lines.retinCollagen3dCode}`,
  },
  {
    title: allProductsLines.HeartleafBlemish,
    desciprtion: `heartleaf Blemish для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: HEARTLEAF_BLEMISH_PRODUCTS,
    path: `/${PATH.lines.heartLeaf}`,
  },
  {
    title: allProductsLines.ProMoisture,
    desciprtion: `ProMoisture для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: PRO_MOISTURE_PRODUCTS,
    path: `/${PATH.lines.proMoisture}`,
  },
  {
    title: allProductsLines.BiomeLacto,
    desciprtion: `BiomeLacto для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: BIOME_LACTO_PRODUCTS,
    path: `/${PATH.lines.biome5lacto}`,
  },
  {
    title: allProductsLines.YuzuHoney,
    desciprtion: `YuzuHoney для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: YUZU_HONEY_PRODUCTS,
    path: `/${PATH.lines.yuzuHoney}`,
  },
  {
    title: allProductsLines.OriginalHerbWormwood,
    desciprtion: `OriginalHerbWormwood для сохранения молодости кожи. 
        Плотная кожа снаружи и упругая внутри благодаря синергии 7 видов коллагена.`,
    products: HERB_WORMWOOD_PRODUCTS,
    path: `/${PATH.lines.originalHerbWormwood}`,
  },
];
