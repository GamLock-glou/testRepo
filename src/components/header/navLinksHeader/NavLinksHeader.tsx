import React, {useState} from 'react';
import cn from 'classnames';

import {ReactComponent as TickDown} from '../../../assets/icons/tickDown.svg';

import {menu} from '../../../utils/constants/menu';

import styles from './styles.module.scss';
import {NavLinkHeader} from './NavLinkHeader';
import {AdditionalMenu} from './additionalMenu/AdditionalMenu';

const menuTablet = {
  menu: [...menu].filter((_, index) => index < 5),
  additionalMenu: [...menu].filter((_, index) => index >= 5),
};

export const NavLinksHeader = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const handleClick = () => {
    setIsShowMenu(!isShowMenu);
  };

  return (
    <>
      <div className={styles.container}>
        {menu.map((item) => {
          return <NavLinkHeader key={item.title} item={item} />;
        })}
      </div>
      <div className={styles.containerDevice}>
        <div className={styles.buttonGroupDevice}>
          {menuTablet.menu.map((item) => {
            return <NavLinkHeader key={item.title} item={item} />;
          })}
        </div>
        <div className={styles.cellAdditionalMenu}>
          <div className={cn(isShowMenu && styles.openButton,
            styles.buttonAdditionalMenu)} onClick={handleClick}>
            <div className={styles.text}>ЕЩЕ</div>
            <div
              className={cn(styles.tick, {
                [styles.active]: isShowMenu,
              })}
            >
              <TickDown />
            </div>
          </div>
          {isShowMenu && <AdditionalMenu
            closeMenu={handleClick}
            items={menuTablet.additionalMenu}/>}
        </div>
      </div>
    </>
  );
};
