import React, {ReactElement} from 'react';
import cn from 'classnames';

type ButtonProps = {
  children: ReactElement | string;
  isActive?: boolean;
  className: string;
  activeClassName?: string;
  onClick: () => void;
}

export const ButtonWithActive: React.FunctionComponent<ButtonProps> = ({
  children,
  isActive = false,
  className,
  activeClassName,
  onClick}) => {
  return (<button className={cn(
    className, {
      activeClassName: [isActive],
    },
  )}
  onClick={onClick}>
    {children}
  </button>);
};

export default ButtonWithActive;
