import SectionUI from '@/components/ui/section/SectionUI';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '@/components/ui/button/submit/Button';
import { IconAiFace, IconSticky, IconCloak } from '@/components/icons';

const WoMallProducts = () => {
  return (
    <>
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <IconAiFace width={60} color="#e3bc41" />
            <div className="ms-4">
              <h3 className="fw-bold fs-6 mb-1 ">AI面具</h3>
              <div className="d-flex align-items-center">
                <Coin color="red" scale={0.4}>
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>

                <span
                  className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                  style={{ width: '24px' }}
                >
                  10
                </span>
              </div>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              兌換使用
            </Button>
          </div>
        </div>
        <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
          <p>道具能力：更換自己不同的紅籌碼 AI 臉，展現不一樣的自己！</p>
        </div>
      </SectionUI>
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <IconCloak width={60} color="#e3bc41" />
            <div className="ms-4">
              <h3 className="fw-bold fs-6 mb-1 ">變身斗篷</h3>
              <div className="d-flex align-items-center">
                <Coin color="red" scale={0.4}>
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>

                <span
                  className="fs-5 fw-bold fs-sm text-coinRed ms-2 d-inline-block text-center"
                  style={{ width: '24px' }}
                >
                  10
                </span>
              </div>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              兌換使用
            </Button>
          </div>
        </div>
        <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
          <p>道具能力：讓你的籌碼覺醒，進化為獨特設計風格，展現無可取代的存在！</p>
        </div>
      </SectionUI>
      <SectionUI>
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-start">
            <IconSticky width={60} color="#e3bc41" />
            <div className="ms-4">
              <h3 className="fw-bold fs-6 mb-2 ">螃蟹哥貼圖</h3>
              <div className="d-flex align-items-center">
                <Coin color="red" scale={0.4}>
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>

                <span
                  className="fs-6 fw-bold fs-sm text-coinRed ms-1 d-inline-block text-center"
                  style={{ width: '24px' }}
                >
                  10
                </span>
              </div>
            </div>
          </div>
          <div className="text-start ms-5">
            <Button color="red" size="sm">
              兌換使用
            </Button>
          </div>
        </div>
        <div className="mt-3 text-muted fs-sm p-2 bg-grey-50 rounded">
          <p>道具能力：發貼文時可當作 Emoji 心情貼使用，在私聊房也能用貼圖讓聊天更有趣！</p>
        </div>
      </SectionUI>
    </>
  );
};

export default WoMallProducts;
