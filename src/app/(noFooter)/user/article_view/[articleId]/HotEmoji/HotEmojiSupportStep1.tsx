import { IconHot, IconLove } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';

const HotEmojiSupportStep1 = () => {
  return (
    <div className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
      <div className="text-center mb-8">
        <IconHot width={60} color="#cd506d" />
        <h2 className="fs-4 fw-bold text-primary">推爆+1</h2>
      </div>
      <div className="mx-auto">
        <span className="fw-bold mb-2">支持喜愛的創作者</span>
        <ul className="fs-sm ">
          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <span className="mx-1">只要購買</span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，創作者就能獲得分潤！</span>
          </li>

          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <span className="mx-1">丟出一顆</span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，推爆這則貼文！</span>
          </li>

          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <p className="ms-1">你的頭像將置頂榮耀展示！</p>
          </li>
        </ul>
        <div className="text-center mt-5">
          <Button width="expand">丟籌碼 推爆！</Button>
        </div>
      </div>
    </div>
  );
};

export default HotEmojiSupportStep1;
