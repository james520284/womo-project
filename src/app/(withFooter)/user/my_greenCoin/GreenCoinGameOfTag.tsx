import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';

const GreenCoinGameOfTag = () => {
  return (
    <section>
      {AVATAR_LINK.others.map((user) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-3 border-bottom"
        >
          <div className="d-flex  align-items-center">
            <Avatar src={user.image} size={52} />
            <div className="ms-2">
              <span className="fw-bold mb-1">{user.name}</span>
              <span className="text-grey-400 fs-xs">．標記我們</span>
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
              回標
            </ButtonOutline>
          </div>
        </div>
      ))}
    </section>
  );
};

export default GreenCoinGameOfTag;
