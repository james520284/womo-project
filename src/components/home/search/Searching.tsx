import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from 'antd/es/avatar/Avatar';

const Searching = () => {
  return (
    <section className="container-fluid mt-5">
      {AVATAR_LINK.others.map((user) => (
        <div
          key={user.name}
          className="d-flex justify-content-between align-items-center py-5 border-bottom"
        >
          <div className="d-flex  align-items-start">
            <Avatar src={user.image} size={60} />
            <div className="ms-2">
              <div className="d-flex flex-column align-items-start">
                <span className="text-grey-400 fs-xs">{user.userId}</span>
                <span className="fw-bold">{user.name}</span>
                <span className="bg-grey-100 rounded p-1 fs-xs">1則新貼文</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Searching;
