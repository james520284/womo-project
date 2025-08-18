import style from './MyRedCoinPlan.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import Image from 'next/image';
import { COINS } from '@/constants/coin';

const MyRedCoinPlan = () => {
  return (
    <>
      <div className={`container-fluid mt-10 ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex align-items-center">
          <Coin color="red" scale={1}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>

          <div className="ms-3 d-flex flex-column flex-grow-1">
            <h2 className="fs-5 fw-bold mb-3">我的紅籌碼</h2>
            <p className="d-flex align-items-center">
              <span>每顆價格</span>
              <span className="text-warning fw-bold ms-2 me-1">100</span>
              <Image src={COINS[2].image} alt="金籌碼" width={20} height={20} />
            </p>
          </div>
        </section>

        {/* 收費區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">紅籌碼等值</span>
            <span className="align-self-center  fs-5 py-2">
              <span className=" fw-bold me-2">NT$10</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每顆</span>
            </span>
            <span className="fs-xs ms-auto">價格固定無法變動</span>
          </div>
          <div className={style.section}>
            <span className="fs-sm">紅籌碼分潤</span>
            <span className="align-self-center  fs-5 py-2">
              <span className="text-primary fw-bold me-2">NT$4</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每顆</span>
            </span>
            <span className="fs-xs ms-auto">分潤無上限</span>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyRedCoinPlan;
