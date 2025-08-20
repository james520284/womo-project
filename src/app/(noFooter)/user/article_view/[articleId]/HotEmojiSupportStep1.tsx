import style from './page.module.scss';
import { IconHot, IconLove } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import LoveIcon from '@/components/icons/LoveIcon';
const HotEmojiSupportStep1 = () => {
  return (
    <div className={`container-fluid mt-10 ${style.wrapper}`}>
      <div className="text-center mb-8">
        <IconHot width={60} color="#cd506d" />
        <h2 className="fs-4 fw-bold text-primary">推爆+1</h2>
      </div>
      <div className="w-50 mx-auto">
        <span className="fw-bold mb-2">支持喜愛的創作者</span>
        <ul className="fs-sm ">
          <li className="mb-2 d-flex align-items-center">
            <span className="me-1">
              <span>
                <LoveIcon width={16} color="#cd506d" />
              </span>
              &nbsp;投出一顆
            </span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，推爆貼文！</span>
          </li>
          <li className="mb-2 d-flex align-items-center">
            <span className="me-1">
              <span>
                <LoveIcon width={16} color="#cd506d" />
              </span>
              &nbsp;購買
            </span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，創作者獲得分潤！</span>
          </li>
          <li className="mb-2">
            <span>
              <LoveIcon width={16} color="#cd506d" />
            </span>
            &nbsp;你的頭像將置頂榮耀展示！
          </li>
        </ul>
        <div className="text-center mt-5">
          <Button width="expand">投籌碼推爆！</Button>
        </div>
      </div>
    </div>
  );
};

export default HotEmojiSupportStep1;
