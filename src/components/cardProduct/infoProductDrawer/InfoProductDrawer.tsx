import React from 'react';
import cn from 'classnames';

import {ReactComponent as ArrowToLeft} from '../../../assets/icons/arrowToLeft.svg';
import {ReactComponent as ArrowToRight} from '../../../assets/icons/arrowToRight.svg';

import {CustomButton} from '../../../UI/customButton/CustomButton';
import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';

import {ButtonRollUp} from './buttonRollUp/ButtonRollUp';

import {DescriptionProduct} from './descriptionProduct/DescriptionProduct';
import {ApplicationProduct} from './applicationProduct/ApplicationProduct';

import styles from './styles.module.scss';

export type InfoProductDrawerProps = {
  values: {
    description: {
        isActiveDescription: boolean;
        handleDescriptionDrawer: (flag: boolean) => void;
    };
    application: {
        isActiveApplication: boolean;
        handleApplicationDrawer: (flag: boolean) => void;
    };
  }
  handleClose: () => void;
}

export const InfoProductDrawer: React.FunctionComponent<InfoProductDrawerProps> = ({
  values,
  handleClose,
}) => {
  const {description, application} = values;
  return (
    <div className={cn(styles.container)}>
      <DescriptionProduct {...description} />
      <ApplicationProduct {...application} />
      {
        (description.isActiveDescription || application.isActiveApplication) &&
        <ButtonRollUp handleCLose={handleClose} />
      }
    </div>
  );
};
