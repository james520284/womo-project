import { IconHot, IconCheckDouble } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';

const HotEmojiSupportSuccess = () => {
  return (
    <>
      <div className="text-center pt-10 mb-5">
        <IconHot width={60} color="#cd506d" />
        <h2 className="fs-4 fw-bold text-primary mt-3">
          <IconCheckDouble width={32} />
          &nbsp;成功推爆！
        </h2>
      </div>

      <div className="fs-sm mx-auto bg-grey-50 py-2 px-4 rounded-pill d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <Coin color="red" scale={0.4}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-2 fs-6 fw-bold text-coinRed">-1</span>
        </div>
        <span>
          目前剩餘顆數：<span className="text-coinRed fw-bold">6</span>
        </span>
      </div>
    </>
  );
};

export default HotEmojiSupportSuccess;
