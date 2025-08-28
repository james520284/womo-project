import SectionUI2 from '@/components/ui/section/SectionUI2';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Button from '@/components/ui/button/submit/Button';
import Avatar from '@/components/ui/avatar/Avatar';
import { COINS } from '@/constants/coin';

const YellowCoinCollectList = () => {
  return (
    <>
      <SectionUI2 title="籌碼任務">
        <div className="d-flex flex-column gap-5">
          {/* 任務1 */}
          <div className="d-flex justify-content-between align-items-center pb-5 border-bottom">
            <div>
              <span className="fw-bold mb-1">完整我的小檔案</span>
              <div className="d-flex  align-items-center">
                <span className="me-1">獎勵：</span>
                <Avatar src={COINS[2].image} size={28} />
                <span className="ms-1 fw-bold text-coinYellow">10</span>
              </div>
            </div>
            <div>
              <Button color="light" size="sm">
                提示
              </Button>
              &nbsp;&nbsp;
              <ButtonOutline color="dark" size="sm">
                GO
              </ButtonOutline>
            </div>
          </div>

          {/* 任務2 */}
          <div className="d-flex justify-content-between align-items-center pb-5 border-bottom">
            <div>
              <span className="fw-bold mb-1">帳號綁定手機號碼</span>
              <div className="d-flex  align-items-center">
                <span className="me-1">獎勵：</span>
                <Avatar src={COINS[2].image} size={28} />
                <span className="ms-1 fw-bold text-coinYellow">10</span>
              </div>
            </div>
            <div>
              <ButtonOutline color="dark" size="sm">
                GO
              </ButtonOutline>
            </div>
          </div>

          {/* 任務3 */}
          <div className="d-flex justify-content-between align-items-center pb-5 ">
            <div>
              <span className="fw-bold mb-1">增加一位籌碼朋友</span>
              <div className="d-flex  align-items-center">
                <span className="me-1">獎勵：</span>
                <Avatar src={COINS[2].image} size={28} />
                <span className="ms-1 fw-bold text-coinYellow">10</span>
              </div>
            </div>
            <div>
              <ButtonOutline color="dark" size="sm">
                GO
              </ButtonOutline>
            </div>
          </div>
        </div>
      </SectionUI2>
    </>
  );
};

export default YellowCoinCollectList;
