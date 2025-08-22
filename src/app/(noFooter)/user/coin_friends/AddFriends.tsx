import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import AddFriendsByGivingCoin from './AddFriendsByGivingCoin';
import AddFriendsByReceiveCoin from './AddFriendsByReceiveCoin';

const AddFriends = () => {
  const [tab, setTab] = useState<'receiveCoin' | 'giveMyCoin'>('giveMyCoin');

  return (
    <>
      {/* 頁籤區 */}
      <section className="mt-8">
        <h2 className="fs-6 mb-5 fw-bold text-secondary">如何增加我的籌碼朋友？</h2>
        <div className="mb-5 d-flex align-items-center">
          <Tab isActive={tab === 'giveMyCoin'} onClick={() => setTab('giveMyCoin')}>
            發籌碼給對方領
          </Tab>
          <Tab isActive={tab === 'receiveCoin'} onClick={() => setTab('receiveCoin')}>
            領取對方的籌碼
          </Tab>
        </div>
      </section>

      {/* 列表區 */}
      {tab === 'giveMyCoin' ? <AddFriendsByGivingCoin /> : <AddFriendsByReceiveCoin />}
    </>
  );
};

export default AddFriends;
