import { IconDraw, IconChat } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';

const DrawWallPayStep1 = () => {
  return (
    <div className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
      <div className="text-center mb-8 text-primary">
        <IconDraw width={60} />
        <h2 className="fs-4 fw-bold mt-2">認養小牆</h2>
      </div>
      <div className=" mx-auto">
        <span className="fw-bold mb-2">怎麼玩</span>
        <ul className="fs-sm ">
          <li className="mb-2 d-flex align-items-center">
            <IconChat width={16} color="#cd506d" />
            <span className="mx-1">丟出30顆</span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，就能認養一格我的專屬塗鴉小牆！</span>
          </li>

          <li className="mb-2 d-flex align-items-start">
            <IconChat width={16} color="#cd506d" />
            <p className="ms-1">認養後，小牆永久開放塗鴉，大家都能加入群聊</p>
          </li>

          <li className="mb-2 d-flex align-items-start">
            <IconChat width={16} color="#cd506d" />
            <p className="ms-1">你的頭像與名字將永久留在牆上，榮耀展示不會消失！</p>
          </li>
        </ul>
        <div className="text-center mt-5">
          <Button width="expand" color="red">
            丟籌碼 認養小牆！
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DrawWallPayStep1;
