import style from './MyRedCoinPlan.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import Image from 'next/image';
import { COINS } from '@/constants/coin';
import { IconCheckBadge } from '@/components/icons';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

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
            <div className="d-flex align-items-center  mb-3">
              <h2 className="fs-5 fw-bold me-2">我的紅籌碼</h2>
              <IconCheckBadge width={20} color="#c3c3c3" />
            </div>
            <p className="d-flex align-items-center">
              <span>每顆價格</span>
              <span className="text-warning fw-bold ms-2 me-1">100</span>
              <Image src={COINS[2].image} alt="金籌碼" width={20} height={20} />
            </p>
          </div>
        </section>

        {/* 收費區 */}
        <section className="d-flex mt-3 mb-10">
          <div className={style.section}>
            <span className="fs-sm">紅籌碼等值</span>
            <span className="align-self-center  fs-5 py-2">
              <span className=" fw-bold me-2">NT$10</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每顆</span>
            </span>
            <span className="fs-xs ms-auto">賣價固定無法變動</span>
          </div>
          <div className={style.section}>
            <span className="fs-sm">紅籌碼分潤</span>
            <span className="align-self-center  fs-5 py-2">
              <span className="text-primary fw-bold me-2">NT$4</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每顆</span>
            </span>
            <span className="fs-xs ms-auto">販售分潤無上限</span>
          </div>
        </section>

        {/* 特權區 */}
        <section>
          <div className="d-flex align-items-center justify-content-between  mb-5">
            <div className="d-flex align-items-center text-primary">
              <IconCheckBadge width={36} />
              <h2 className="fs-5 fw-bold ms-2">紅勾勾</h2>
            </div>
            <ButtonOutline size="sm">開始認證</ButtonOutline>
          </div>
          <div>
            <ul className="fs-sm">
              <li className="mb-3">
                <span className="fw-bold">擁有特權</span>
                <p>紅籌碼臉可以更換為本人真實頭像</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">真實可靠</span>
                <p>官方認證，杜絕假帳號</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">社群信任</span>
                <p>留言、互動更有說服力，第一眼就贏得信任</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">加倍曝光</span>
                <p>演算法加持，讓你的籌碼和貼文被更多人看見</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">合作加分</span>
                <p>更容易吸引品牌與夥伴找上門</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyRedCoinPlan;
