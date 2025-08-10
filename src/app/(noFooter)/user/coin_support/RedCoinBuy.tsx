import style from './RedCoinBuy.module.scss';
import Counter from '@/components/ui/counter/Counter';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import SectionUI from '@/components/ui/section/SectionUI';

const RedCoinBuy = () => {
  const total = 100;
  const remain = 100;
  return (
    <section className={style.section}>
      {/* 紅籌碼數量區 */}
      <SectionUI>
        <div className="d-flex align-items-center mb-2 bg-grey-50 p-2 rounded-2">
          <h3 className="fs-6 fw-bold me-1">購買我的紅籌碼</h3>
          <Coin color="red" scale={0.25}>
            <Avatar src={AVATAR_LINK.my}></Avatar>
          </Coin>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <Counter value="1" onChange={() => {}} min={1} />
          <div className="d-flex align-items-center justify-content-center">
            <span className={`text-coinYellow fw-bold flex-shrink-0 ${style.textNoWrap}`}>
              小計 <span>100</span>
            </span>
            <div className={style.imgWrapper}>
              <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
            </div>
          </div>
        </div>
      </SectionUI>

      {/* 金籌碼數量區 */}
      <SectionUI>
        <div className="d-flex align-items-center mb-2 bg-grey-50 p-2 rounded-2">
          <h3 className="fs-6 fw-bold">額外送我金籌碼</h3>
          <div className={style.imgWrapper2}>
            <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between">
          <Counter value="0" onChange={() => {}} min={0} />
          <div className="d-flex align-items-center justify-content-center">
            <span className={`text-coinYellow fw-bold flex-shrink-0 ${style.textNoWrap}`}>
              小計 <span>0</span>
            </span>
            <div className={style.imgWrapper}>
              <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
            </div>
          </div>
        </div>
      </SectionUI>
      <hr />

      {/* 總計區 */}
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h3 className="fs-6 fw-bold">需支付總額</h3>
        <div className="d-flex align-items-center  ">
          <span className={`text-coinYellow fw-bold flex-shrink-0 ${style.textNoWrap}`}>
            <span>{total}</span>
          </span>
          <div className={style.imgWrapper}>
            <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-between mb-2">
        <h3 className="fs-6 fw-bold">我目前餘額</h3>
        <div className="d-flex align-items-center  ">
          <span className={`text-coinYellow fw-bold flex-shrink-0 ${style.textNoWrap}`}>
            <span>{remain}</span>
          </span>
          <div className={style.imgWrapper}>
            <Image src={COINS[2].image} alt={COINS[2].name} fill className={style.img} />
          </div>
        </div>
      </div>
      {/* 送出鍵 */}
      {remain >= total ? (
        <button type="submit" className={`${style.submitBtn} ${style.submitBtnEnough}`}>
          支付
        </button>
      ) : (
        <Link href="#" className={`${style.submitBtn} ${style.submitBtnLack}`}>
          餘額不足&emsp;前往儲值 〉
        </Link>
      )}
    </section>
  );
};

export default RedCoinBuy;
