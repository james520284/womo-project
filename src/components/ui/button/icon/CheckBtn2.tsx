// [本頁目的]：通用型checkbox按鈕

import style from './CheckBtn2.module.scss';
import Check from '@/components/icons/Check';

type Props = {
  isActive?: boolean;
};

const CheckBtn2 = ({ isActive = true }: Props) => {
  return (
    <>
      <div className={`${isActive ? style.btnActive : style.btn}`}>
        {isActive ? <Check /> : <Check style={{ opacity: '0' }} />}
      </div>
    </>
  );
};

export default CheckBtn2;
