import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const GreenCoinGameListOnGoing = () => {
  return (
    <div>
      {/* 一天一信 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="green" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinGreen ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                1
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">悄悄話</h3>
              <p>用我的籌碼，寄一封悄悄話給我，讓我們再靠近一點🥰 </p>
              <span className="text-muted mt-1 fs-xs">#一天限寄一封</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="green" size="sm">
              碼上寄
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 限時塗鴉 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="green" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinGreen ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                1
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">限時塗鴉</h3>
              <p>用我的籌碼，在我的塗鴉牆，想到什麼就寫，想聊什麼就聊😁 </p>
              <span className="text-muted mt-1 fs-xs">#每則訊息只停留24小時</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="green" size="sm">
              碼上塗
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 關係標記 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="green" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinGreen ms-2 d-inline-block text-center"
                style={{ width: '24px' }}
              >
                10
              </span>
            </div>
            <div className="ms-5">
              <h3 className="fw-bold fs-6 mb-2">關係標記</h3>
              <p>用我的籌碼，標記我們的關係，讓我們的故事貼上專屬的名字😊</p>
              <span className="text-muted mt-1 fs-xs">#想標幾組都行</span>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="green" size="sm">
              碼上標
            </Button>
          </div>
        </div>
      </SectionUI>

      {/* 解鎖秘密 */}
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <div className="d-flex align-items-center">
              <Coin color="green" scale={0.5}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
              <span
                className="fs-5 fw-bold fs-sm text-coinGreen ms-2 d-inline-block text-center"
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
              <Button color="green" size="sm">
                搜貼文
              </Button>
            </div>

            <ButtonOutline color="green" size="sm">
              搜空間
            </ButtonOutline>
          </div>
        </div>
      </SectionUI>
    </div>
  );
};

export default GreenCoinGameListOnGoing;
