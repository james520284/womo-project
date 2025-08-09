// [本頁目的]：通用型checkbox按鈕

import style from './CheckBtn.module.scss';
import { IconCheck } from '@/components/icons';

type Props = {
  isActive?: boolean;
};

const CheckBtn = ({ isActive = true }: Props) => {
  return (
    <>
      <div className={`${isActive ? style.btnActive : style.btn}`}>
        {isActive ? <IconCheck /> : <IconCheck style={{ opacity: '0' }} />}
      </div>
    </>
  );
};

export default CheckBtn;
