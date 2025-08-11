import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const GreenCoinGameOfLetter = () => {
  return (
    <section>
      {AVATAR_LINK.others.map((user) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <Avatar src={user.image} size={52} />
            <div className="ms-2">
              <div className="d-flex  align-items-center">
                <span className="fw-bold mb-1">{user.name}</span>
                <span className="text-grey-400 fs-xs">．2天前</span>
              </div>
              <div className="d-flex  align-items-center fs-sm">
                <span className="me-1">用</span>
                <Coin scale={0.25} color="green">
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>
                <span className="ms-1">寄一封悄悄話給我</span>
              </div>
            </div>
          </div>
          <div>
            <ButtonOutline color="green" size="md">
              打開
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GreenCoinGameOfLetter;
