import style from './MyGreenCoinPlan.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import Coin from '@/components/ui/coin/Coin';
import { IconCheckBadge } from '@/components/icons';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

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
            <div className="d-flex align-items-center  mb-3">
              <h2 className="fs-5 fw-bold me-2">我的綠籌碼</h2>
              <IconCheckBadge width={20} color="#c3c3c3" />
            </div>
            <p className=" d-flex align-items-center">
              <span>本月剩餘顆數</span>
              <span className="text-secondary fw-bold mx-2">85</span>
            </p>
          </div>
        </section>

        {/* 收費區 */}
        <section className="d-flex mt-3 mb-10">
          <div className={style.section}>
            <span className="fs-sm">免費方案</span>
            <span className="align-self-center  fs-5 py-2">
              <span className=" fw-bold me-2">100顆</span>
              <span className="text-grey-600 fs-sm">/&nbsp;每月</span>
            </span>
            <span className="fs-xs ms-auto">每月1號自動重置</span>
          </div>
          <div className={style.section}>
            <span className="fs-sm">無限方案</span>
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

        {/* 特權區 */}
        <section>
          <div className="d-flex align-items-center justify-content-between mb-5">
            <div className="d-flex align-items-center text-secondary">
              <IconCheckBadge width={36} />
              <h2 className="fs-5 fw-bold ms-2">綠勾勾</h2>
            </div>
            <ButtonOutline size="sm" color="green">
              開始試用
            </ButtonOutline>
          </div>
          <div>
            <ul className="fs-sm">
              <li className="mb-3">
                <span className="fw-bold">多元發幣</span>
                <p>支援智能 Code、手機號碼等多元發送方式</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">專屬後台</span>
                <p>更多進階模組，讓籌碼帳號推廣更強大</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">分店聯盟</span>
                <p>籌碼可在多間分店通用，很適合連鎖品牌或有多據點的創作者</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">團隊管理</span>
                <p>可設定不同層級的權限，方便多人經營</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">廣告投放</span>
                <p>可在WOMO投放廣告，或將優惠禮物上架到指定帳號的網店通路</p>
              </li>
              <li className="mb-3">
                <span className="fw-bold">業配媒合</span>
                <p>品牌可公開提案找創作者，創作者也能接案賺收入</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default MyGreenCoinPlan;
