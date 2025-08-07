import style from './Tab.module.scss';

type Props = {
  children: React.ReactNode;
  isActive?: boolean;
  onClick?: () => void;
  num?: number;
  unit?: string;
  isShowData?: boolean;
};

export const Tab = ({ children, isActive, onClick, num, unit, isShowData = false }: Props) => {
  return (
    <>
      <button type="button" className={isActive ? style.tabActive : style.tab} onClick={onClick}>
        {children}&nbsp;
        {isShowData && (
          <span className="text-grey-300 ms-1 fs-xs">
            {num}
            {unit}
          </span>
        )}
      </button>
    </>
  );
};

export const TabDataOnClick = ({ children, isActive, onClick, num, unit }: Props) => {
  return (
    <>
      <button type="button" className={isActive ? style.tabActive : style.tab} onClick={onClick}>
        {children}&nbsp;
        {isActive && (
          <span className="text-grey-300 ms-1 fs-xs">
            {num}
            {unit}
          </span>
        )}
      </button>
    </>
  );
};
