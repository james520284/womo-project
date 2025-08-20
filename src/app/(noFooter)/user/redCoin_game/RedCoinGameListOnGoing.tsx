import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const RedCoinGameListOnGoing = () => {
  return (
    <div>
      {/* 一天一信 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
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
              <h3 className="fw-bold fs-6 mb-2">私聊房</h3>
              <p>用我的籌碼，開啟我們的專屬聊天室🥰</p>
              <span className="text-muted mt-1 fs-xs">#解鎖50則回覆訊息</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              碼上開
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 推爆貼文 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
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
              <h3 className="fw-bold fs-6 mb-2">推爆貼文</h3>
              <p>用我的籌碼，推爆我這則你愛的貼文😁</p>
              <span className="text-muted mt-1 fs-xs">#想推爆幾次都行</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              碼上推
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 認養小牆 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="red" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                10
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">認養小牆</h3>
              <p>用我的籌碼，認養我塗鴉牆上的空白小牆😊</p>
              <span className="text-muted mt-1 fs-xs">#你的頭像將永久印在我的牆布上</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              碼上認
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 購買道具 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
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
              <h3 className="fw-bold fs-6 mb-2">購買道具</h3>
              <p>用我的籌碼，在我的網店購買你喜歡的WOMO道具😊</p>
              <span className="text-muted mt-1 fs-xs">#道具一旦購買將無法取消唷</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              碼上買
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 解鎖秘密 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
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
              <h3 className="fw-bold fs-6 mb-2">解鎖秘密</h3>
              <p>用我的籌碼，解鎖我的秘密🤫</p>
            </div>
          </div>
          <div className="text-start ms-5 d-flex flex-column">
            <div className="mb-1">
              <Button color="red" size="sm">
                搜貼文
              </Button>
            </div>

            <ButtonOutline color="red" size="sm">
              搜空間
            </ButtonOutline>
          </div>
        </div>
      </SectionUI>
    </div>
  );
};

export default RedCoinGameListOnGoing;
