import style from './MyGreenCoinPlan.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import Coin from '@/components/ui/coin/Coin';

const MyGreenCoinPlan = () => {
  return (
    <>
      <div className={`container-fluid mt-10 ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex align-items-center">
          <Coin color="green" scale={1}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>

          <div className="ms-3 d-flex flex-column flex-grow-1">
            <h2 className="fs-5 fw-bold mb-3">我的綠籌碼</h2>
            <p className=" d-flex align-items-center">
              <span>本月剩餘顆數</span>
              <span className="text-secondary fw-bold mx-2">85</span>
            </p>
          </div>
        </section>

        {/* 收費區 */}
        <section className="d-flex mt-3 mb-7">
          <div className={style.section}>
            <span className="fs-sm">免費方案</span>
            <span className="align-self-center  fs-5 py-2">
              <span className=" fw-bold me-2">100顆</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每月</span>
            </span>
            <span className="fs-xs ms-auto">每月1號自動重置</span>
          </div>
          <div className={style.section}>
            <span className="fs-sm">升級方案</span>
            <span className="align-self-center  fs-5 py-2">
              <span className="text-secondary fw-bold me-2">無限顆</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每月</span>
            </span>
            <div className="ms-auto">
              <Button as="a" href="#" color="green" size="sm">
                立即訂閱
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyGreenCoinPlan;
