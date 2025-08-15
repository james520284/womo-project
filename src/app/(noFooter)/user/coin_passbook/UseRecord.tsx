import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Coin from '@/components/ui/coin/Coin';
import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';
import { COINS } from '@/constants/coin';

const UseRecord = () => {
  const actionType = ['對方領取', '打賞對方', '消耗使用'];
  return (
    <section>
      <div className="py-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.others[0].image} size={36} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold fs-sm">{AVATAR_LINK.others[0].name}</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Avatar src={COINS[2].image} size={40} />
            <span className="ms-2 text-primary fw-bold">
              －<span>1</span>
            </span>
          </div>
        </div>
        <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
          <span>2025/08/15</span>
          <span>{actionType[0]}</span>
        </div>
      </div>

      <div className="py-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.others[1].image} size={36} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold fs-sm">{AVATAR_LINK.others[1].name}</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Coin color="green" scale={0.4}>
              <Avatar src={TOPIC_COINS[0].image} />
            </Coin>
            <span className="ms-2 text-primary fw-bold">
              －<span>3</span>
            </span>
          </div>
        </div>
        <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
          <span>2025/08/15</span>
          <span>{actionType[1]}</span>
        </div>
      </div>

      <div className="py-4">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.others[2].image} size={36} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold fs-sm">{AVATAR_LINK.others[2].name}</span>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Coin color="red" scale={0.4}>
              <Avatar src={AVATAR_LINK.others[2].image} />
            </Coin>
            <span className="ms-2 text-primary fw-bold">
              －<span>5</span>
            </span>
          </div>
        </div>
        <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
          <span>2025/08/15</span>
          <span>{actionType[2]}</span>
        </div>
      </div>
    </section>
  );
};

export default UseRecord;
