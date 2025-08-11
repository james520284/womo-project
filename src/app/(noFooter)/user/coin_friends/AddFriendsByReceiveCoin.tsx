import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Coin from '@/components/ui/coin/Coin';

const AddFriendsByReceiveCoin = () => {
  return (
    <>
      {/* 列表區 */}

      <SectionUI2 title="我可能感興趣的人">
        {AVATAR_LINK.others.map((user) => (
          <div
            key={user.id}
            className="d-flex align-items-center justify-content-between py-3 border-bottom"
          >
            <div className="d-flex align-items-center">
              <Coin color="green" scale={0.6}>
                <Avatar src={user.image} />
              </Coin>
              <span className="fw-bold ms-3 ">{user.name}</span>
            </div>

            <Button as="a" href="/user/coin_support" color="green" size="md">
              領取
            </Button>
          </div>
        ))}
      </SectionUI2>
    </>
  );
};

export default AddFriendsByReceiveCoin;
