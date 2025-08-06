import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Button from '../button/submit/Button';
import DoubleCoins from '../coin/DoubleCoins';

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
        <Button size="small" color="brand">
          報名
        </Button>
      </div>
    </>
  );
};
