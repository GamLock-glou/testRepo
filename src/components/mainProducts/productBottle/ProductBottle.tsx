import React, {useState} from 'react';
import {animated, useSpring} from '@react-spring/web';
import cn from 'classnames';

import {IBottle} from '../../../utils/types/types';

import {ProductPopoverContainer} from '../productPopoverContainer/ProductPopoverContainer';
import PopoverOnButton from '../../popover-on-button/PopoverOnButton';

import styles from './styles.module.scss';

type ProductBottleProps = {
  bottle: Pick<IBottle, 'bottleUrl' | 'popoverStyle' | 'popoverValues' | 'path'>;
  index: number;
  setActiveProduct: (value: number) => void;
};

type SpringAnimation = {
  x: number;
  y: number;
  rotateZ: number;
  config: {
    duration: number;
  };
};

const c1920 = {x: 100, y: -300};
const c1360 = {x: 70, y: -250};
const c1024 = {x: 50, y: -170};

const baseOptionForSpring: SpringAnimation = {
  x: 0,
  y: 0,
  rotateZ: 0,
  config: {
    duration: 500,
  },
};

const ProductBottle: React.FunctionComponent<ProductBottleProps> = ({
  bottle,
  index,
  setActiveProduct,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [springs, api] = useSpring(() => ({
    from: {
      ...baseOptionForSpring,
    },
  }));

  const handleOpen = () => {
    if (!isActive) {
      setActiveProduct(index);
      setIsActive(true);
      const width = window.innerWidth;
      const coordinates = width >= 1920 ? c1920
        : width >= 1360 ? c1360 : c1024;
      api.start({
        from: {...springs},
        to: {
          ...baseOptionForSpring,
          x: index % 2 === 0 ? coordinates.x : -coordinates.x,
          y: coordinates.y,
          rotateZ: index % 2 === 0 ? -7 : 7,
        },
      });
    }
  };

  const handleClose = () => {
    setActiveProduct(-1);
    setIsActive(false);
    api.start({
      from: {...springs},
      to: {...baseOptionForSpring},
    });
  };

  return (
    <div className={cn({[styles.active]: isActive})}>
      <animated.div
        style={{...springs}}
        className={styles.wrapperImg}
      >
        <img
          className={styles.imgContainer}
          src={bottle.bottleUrl}
          alt={`bottle ${index}`}
          onClick={handleOpen}
        />
        {isActive && (
          <div
            className={index % 2 === 0 ? styles.popoverLeft : styles.popoverRight}
            style={bottle.popoverStyle}
          >
            <PopoverOnButton
              forcedOpening={isActive}
              handleClose={handleClose}
              isLeft={index === 4 || index === 5}>
              <ProductPopoverContainer
                popover={bottle.popoverValues}
                path={bottle.path}
              />
            </PopoverOnButton>
          </div>
        )}
      </animated.div>
    </div>
  );
};

export default React.memo(ProductBottle);
