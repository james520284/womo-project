import { IconDraw, IconChat } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';

const DrawWallStep1 = () => {
  return (
    <div className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
      <div className="text-center mb-8 text-secondary">
        <IconDraw width={60} />
        <h2 className="fs-4 fw-bold mt-2">限時塗鴉聊</h2>
      </div>
      <div className=" mx-auto">
        <span className="fw-bold mb-2">怎麼玩</span>
        <ul className="fs-sm ">
          <li className="mb-2 d-flex align-items-center">
            <IconChat width={16} color="#00b1b5" />
            <span className="mx-1">任何人丟一顆</span>
            <Coin color="green" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，就能開啟我的塗鴉牆</span>
          </li>

          <li className="mb-2 d-flex align-items-start">
            <IconChat width={16} color="#00b1b5" />
            <p className="ms-1">回覆只能用塗鴉，聊天更好玩、更隨性</p>
          </li>

          <li className="mb-2 d-flex align-items-start">
            <IconChat width={16} color="#00b1b5" />
            <p className="ms-1">24小時限時群聊，過期自動消失，錯過就沒啦！</p>
          </li>
        </ul>
        <div className="text-center mt-5">
          <Button width="expand" color="green">
            丟籌碼 塗鴉聊！
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawWallStep1;
