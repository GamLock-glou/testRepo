import React from 'react';
import cn from 'classnames';

import {CustomButton} from '../../../../UI/customButton/CustomButton';
import {ButtonVariant} from '../../../../utils/constants/ButtonVariantEnum';

import styles from './styles.module.scss';


type Props = {
  text: string;
  active?: boolean;
  onClick: (answer: string) => void;
}

export const QuizOption: React.FunctionComponent<Props> = ({
  text,
  active = false,
  onClick,
}) => {
  return (<CustomButton
    variant={ButtonVariant.WhiteLilac}
    className={cn(styles.optionContainer, {[styles.active]: active})}
    onClick={()=>{onClick(text);}}>
    <>
      <div className={styles.radio}>
        <div className={active ? styles.radioActive : ''}></div>
      </div>
      {text}
    </>
  </CustomButton>);
};

export default QuizOption;
