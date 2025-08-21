import { IconCheckDouble } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';

const GiveCoinInArticleSuccess = () => {
  return (
    <>
      <div className="d-flex flex-column align-items-center pt-10 mb-5">
        <Coin color="green" scale={1}>
          <Avatar src={AVATAR_LINK.my} />
        </Coin>
        <h2 className="fs-4 fw-bold text-secondary mt-3">
          <IconCheckDouble width={32} />
          <span className="ms-2">成功領取！</span>
        </h2>
      </div>
    </>
  );
};

export default GiveCoinInArticleSuccess;
