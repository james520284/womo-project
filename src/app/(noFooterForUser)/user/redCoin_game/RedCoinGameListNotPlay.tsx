import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const RedCoinGameListNotPlay = () => {
  return (
    <div>
      {/* 參加湊咖 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between opacity-50">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="red" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                1
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">報名湊咖</h3>
              <p>用我的籌碼，報名我的開團湊咖😎 </p>
              <span className="text-muted mt-1 fs-xs">#可以重複報名</span>
            </div>
          </div>
        </div>
      </SectionUI>

      {/* 樂透抽獎 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between opacity-50">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="red" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                1
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">樂透抽獎</h3>
              <p>用我的籌碼，領我的樂透號抽獎😍 </p>
              <span className="text-muted mt-1 fs-xs">#可以領多組樂透號</span>
            </div>
          </div>
        </div>
      </SectionUI>

      {/* 集點換禮 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between  opacity-50">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="red" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                N
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">集點換禮</h3>
              <p>蒐集我的籌碼，兌換我的小確幸😋</p>
            </div>
          </div>
        </div>
      </SectionUI>
    </div>
  );
};

export default RedCoinGameListNotPlay;
