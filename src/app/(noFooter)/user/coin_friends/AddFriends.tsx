import { TabDataOnClick } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import AddFriendsByGivingCoin from './AddFriendsByGivingCoin';
import AddFriendsByReceiveCoin from './AddFriendsByReceiveCoin';

const AddFriends = () => {
  const [tab, setTab] = useState<'receiveCoin' | 'giveMyCoin'>('giveMyCoin');

  return (
    <>
      {/* 頁籤區 */}
      <section className="mt-8">
        <h2 className="fs-6 mb-5 fw-bold text-secondary">如何增加籌碼朋友？</h2>
        <div className="mb-5 d-flex align-items-center">
          <TabDataOnClick isActive={tab === 'giveMyCoin'} onClick={() => setTab('giveMyCoin')}>
            讓別人領我籌碼
          </TabDataOnClick>
          <TabDataOnClick isActive={tab === 'receiveCoin'} onClick={() => setTab('receiveCoin')}>
            我領取別人籌碼
          </TabDataOnClick>
        </div>
      </section>

      {/* 列表區 */}
      {tab === 'giveMyCoin' ? <AddFriendsByGivingCoin /> : <AddFriendsByReceiveCoin />}
    </>
  );
};

export default AddFriends;
