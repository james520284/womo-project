// [本頁目的]：通用型實心按鈕

'use client';
import style from './Button.module.scss';
import clsx from 'clsx';

type ButtonProps = {
  children: React.ReactNode;
  size?: 'large' | 'small';
  color?: 'primary' | 'secondary' | 'muted' | 'noUse';
  width?: 'fit' | 'expand';
  onClick?: () => void;
  as?: 'button' | 'a';
  href?: string;
  noUse?: boolean;
};

const Button = ({
  children,
  size = 'large',
  color = 'primary',
  width = 'fit',
  onClick,
  as = 'button',
  href,
  noUse,
}: ButtonProps) => {
  if (as === 'a') {
    return !noUse ? (
      <a
        href={href}
        className={clsx(
          style.button,
          style[`button-${size}`],
          style[`button-${color}`],
          style[`button-${width}`]
        )}
      >
        {children}
      </a>
    ) : (
      <span
        className={clsx(
          style.button,
          style[`button-${size}`],
          style[`button-${color}`],
          style[`button-${width}`]
        )}
      >
        {children}
      </span>
    );
  }

  return !noUse ? (
    <>
      <button
        className={clsx(
          style.button,
          style[`button-${size}`],
          style[`button-${color}`],
          style[`button-${width}`]
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  ) : (
    <button
      className={clsx(
        style.button,
        style[`button-${size}`],
        style[`button-${color}`],
        style[`button-${width}`]
      )}
      onClick={onClick}
      disabled
    >
      {children}
    </button>
  );
};

export default Button;
