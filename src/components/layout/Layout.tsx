import React, {ReactElement} from 'react';
import cn from 'classnames';

import HeaderBrand from '../header/HeaderBrand';
import HeaderMain from '../headerMain/HeaderMain';

import {LayoutVariant} from '../../utils/constants/LayoutVariantEnum';

import styles from './styles.module.scss';

type LayoutProps = {
  variant: LayoutVariant;
  children: ReactElement;
};

const layouts = {
  [LayoutVariant.Main]: {
    component: <HeaderMain />,
    className: styles.mainMain,
  },
  [LayoutVariant.Brand]: {
    component: <HeaderBrand />,
    className: styles.mainBrand,
  },
};

//no-trailing-spaces

export const Layout: React.FunctionComponent<LayoutProps> = ({
  variant,
  children,
}) => {
  const {className, component} = layouts[variant];
  return (
    <div className={styles.layout}>
      {component}
      <main className={cn(styles.main, className)}>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export default Layout;
