'use client';

import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Search from '@/components/ui/search/Search';
import { TabDataOnClick } from '@/components/ui/tab/Tab';

const FriendsList = () => {
  const [tab, setTab] = useState<'all' | 'iHave' | 'youHave'>('all');
  const dataArr = ['互有彼此籌碼', '對方有我籌碼', '我有對方籌碼'];
  return (
    <>
      {/* 頁籤區 */}
      <section className="mt-8">
        <div className="mb-5 d-flex align-items-center">
          <TabDataOnClick
            isActive={tab === 'all'}
            onClick={() => setTab('all')}
            num={777}
            unit="人"
          >
            全部
          </TabDataOnClick>
          <TabDataOnClick
            isActive={tab === 'youHave'}
            onClick={() => setTab('youHave')}
            num={520}
            unit="人"
          >
            對方有我籌碼
          </TabDataOnClick>
          <TabDataOnClick
            isActive={tab === 'iHave'}
            onClick={() => setTab('iHave')}
            num={257}
            unit="人"
          >
            我有對方籌碼
          </TabDataOnClick>
        </div>
      </section>

      {/* 功能按鈕區 */}
      <div className="d-flex justify-content-end">
        <Search isActive={true} />
      </div>

      {/* 列表區 */}
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

                <Button color="brand" size="md">
                  打賞
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default FriendsList;
