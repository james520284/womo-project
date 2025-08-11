import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Coin from '@/components/ui/coin/Coin';

const GreenCoinGameOfTag = () => {
  return (
    <section>
      {AVATAR_LINK.others.map((user) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex align-items-start">
            <Avatar src={user.image} size={52} />
            <div className="ms-2 ">
              <div className="d-flex align-items-center mb-2">
                <span className="fw-bold">{user.name}</span>
                <span className="text-grey-400 fs-xs me-1">．用</span>
                <Coin scale={0.2} color="green">
                  <Avatar src={AVATAR_LINK.my} />
                </Coin>
                <span className="text-grey-400 fs-xs ms-1">標記我們</span>
              </div>

              <div className="d-flex  align-items-center fs-sm">
                {user.tags?.map((tag, index) => (
                  <span key={`${user.id}-${index}`} className="me-1 bg-grey-100 rounded p-1 fs-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <ButtonOutline color="green" size="md">
              回貼
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GreenCoinGameOfTag;
