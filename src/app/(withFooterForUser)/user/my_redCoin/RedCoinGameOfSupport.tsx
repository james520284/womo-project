import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const RedCoinGameOfSupport = () => {
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
              <span className="fw-bold mb-1">{user.name}</span>
              <div className="d-flex  align-items-center fs-sm">
                <p className="me-1">持有籌碼</p>
                <Coin scale={0.25} color="red">
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>
                <span className="ms-1 fw-bold text-primary">{user.num}</span>
              </div>
            </div>
          </div>
          <div>
            <ButtonOutline color="red" size="md">
              私聊
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RedCoinGameOfSupport;
