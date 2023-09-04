import React from 'react';
import {useNavigate} from 'react-router-dom';

import ButtonWithActive from '../../buttonWithActive/ButtonWithActive';

import {CustomButton} from '../../../UI/customButton/CustomButton';
import EvasButton from '../../evas-button/EvasButton';

import {ReactComponent as ArrowToLeft} from '../../../assets/icons/arrowToLeft.svg';
import {ReactComponent as ArrowToRight} from '../../../assets/icons/arrowToRight.svg';

import {ButtonVariant} from '../../../utils/constants/ButtonVariantEnum';

import styles from './styles.module.scss';

type LinesListProps = {
  lines: {
    title: string,
    path: string;
    onClick: ()=>void}[];
  activeLine: number;
}

export const LinesList: React.FunctionComponent<LinesListProps> = ({lines, activeLine}) => {
  const navigate = useNavigate();

  function openPrevious() {
    if (activeLine > 0) {
      lines[activeLine - 1].onClick();
    }
  }

  function openNext() {
    if (activeLine < lines.length - 1) {
      lines[activeLine + 1].onClick();
    }
  }

  const openLine = (path: string) => {
    navigate(path);
  };

  return (<>
    <div className={styles.linesList}>
      <div className={styles.title}>Линейка _</div>
      <div className={styles.lines}>
        {lines.map((line, index) => {
          return <div key={index} className={styles.lineBlock}>
            <ButtonWithActive
              className={styles.line}
              activeClassName={styles.lineActive}
              isActive={activeLine === index}
              onClick={line.onClick}>
              {line.title}
            </ButtonWithActive>
            {activeLine === index && <EvasButton
              variant={ButtonVariant.Black}
              onClick={()=>{openLine(line.path);}}
              className={styles.buttonShow}>
              {'Смотреть линейку'}
            </EvasButton>}
          </div>;
        })}
      </div>
    </div>
    <div className={styles.linesListMobile}>
      <CustomButton
        onClick={openPrevious}
        variant={ButtonVariant.Light}
        disabled={activeLine === 0}>
        <ArrowToLeft className={styles.btnIcon}/>
      </CustomButton>
      <div className={styles.headerMobile}>
        <div className={styles.titleMobile}>Линейка _</div>
        <div className={styles.textMobile}>{lines[activeLine].title}</div>
      </div>
      <CustomButton
        onClick={openNext}
        variant={ButtonVariant.Light}
        disabled={activeLine === lines.length - 1}>
        <ArrowToRight className={styles.btnIcon}/>
      </CustomButton>
    </div>
  </>);
};

export default React.memo(LinesList);
