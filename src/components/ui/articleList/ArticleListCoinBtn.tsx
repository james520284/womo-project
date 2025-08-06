import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../button/submit/Button';
import DoubleCoins from '../coin/DoubleCoins';
import Coin from '../coin/Coin';

export const ReceiveBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">丟顆籌碼支持我吧~ </span>
        </div>
        <Button size="md" color="brand">
          打賞
        </Button>
      </div>
    </>
  );
};

export const GiveBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">留言給我就送</span>
          <Coin scale={0.25} color="green">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
        </div>
        <Button size="md" color="brand">
          留言
        </Button>
      </div>
    </>
  );
};

export const WishBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">我許願想獲得</span>
          <Coin scale={0.25} color="red">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
        </div>
        <Button size="md" color="brand">
          送願
        </Button>
      </div>
    </>
  );
};

export const ExchangeBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">我想交換獲得</span>
          <Coin scale={0.25} color="red">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
        </div>
        <Button size="md" color="brand">
          交換
        </Button>
      </div>
    </>
  );
};

export const ReunionBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">拿我的</span>
          <DoubleCoins scale={0.25}>
            <Avatar src={AVATAR_LINK.my} />
          </DoubleCoins>
          <span className="ms-2">報名</span>
        </div>
        <Button size="md" color="brand">
          報名
        </Button>
      </div>
    </>
  );
};

export const SecretBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">拿我的</span>
          <Coin scale={0.25} color="red">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-2">解鎖</span>
        </div>
        <Button size="md" color="brand">
          解鎖
        </Button>
      </div>
    </>
  );
};

export const LotteryBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">拿我的</span>
          <Coin scale={0.25} color="green">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-2">抽獎</span>
        </div>
        <Button size="md" color="brand">
          抽獎
        </Button>
      </div>
    </>
  );
};

export const CollectBtn = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between bg-grey-50 rounded-5">
        <div className="ms-3 fs-xs d-flex align-items-center">
          <span className="me-2">蒐集我的</span>
          <Coin scale={0.25} color="green">
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-2">換禮</span>
        </div>
        <Button size="md" color="brand">
          換禮
        </Button>
      </div>
    </>
  );
};
