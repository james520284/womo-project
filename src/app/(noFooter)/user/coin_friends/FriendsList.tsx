'use client';

import Button from '@/components/ui/button/submit/Button';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

type Props = {
  tab: string;
};

const FriendsList = ({ tab }: Props) => {
  const dataArr = ['互有彼此籌碼', '對方有我籌碼', '我有對方籌碼'];
  return (
    <section>
      {AVATAR_LINK.others.map((user, index) => (
        <div key={user.id} className="d-flex align-items-center py-3 border-bottom">
          <Avatar src={user.image} size={52} />
          <div className="ms-2 flex-grow-1">
            <span className="fw-bold mb-1 ">{user.name}</span>
            <div className="d-flex  align-items-center justify-content-between fs-sm">
              {tab === 'all' && (
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">{dataArr[index]}</span>
              )}
              {tab === 'iHave' && (
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">我有對方籌碼</span>
              )}
              {tab === 'youHave' && (
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">對方有我籌碼</span>
              )}

              <Button as="a" href="/user/coin_support" color="brand" size="md">
                打賞
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FriendsList;
