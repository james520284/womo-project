import style from './CoinFriendsClient.module.scss';
import { TabDataOnClick } from '@/components/ui/tab/Tab';
import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Image from 'next/image';
import Button from '@/components/ui/button/submit/Button';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { IconFriends } from '@/components/icons';

const AddFriends = () => {
  const [tab, setTab] = useState<'receiveCoin' | 'giveMyCoin'>('giveMyCoin');

  return (
    <>
      {/* 頁籤區 */}
      <section className="mt-8">
        <h2 className="fs-6 mb-5 fw-bold text-primary">如何增加籌碼朋友？</h2>
        <div className="mb-5 d-flex align-items-center">
          <TabDataOnClick isActive={tab === 'giveMyCoin'} onClick={() => setTab('giveMyCoin')}>
            發送自己的籌碼
          </TabDataOnClick>
          <TabDataOnClick isActive={tab === 'receiveCoin'} onClick={() => setTab('receiveCoin')}>
            領取別人的籌碼
          </TabDataOnClick>
        </div>
      </section>

      {/* 數據區 */}

      <div className="d-flex align-items-center">
        <span className="ms-auto">目前剩餘顆數：</span>
        <span className="d-flex align-items-center">
          <Coin color="green" scale={0.3}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="text-coinGreen ms-2">85</span>
        </span>
      </div>

      {/* 列表區 */}
      <SectionUI2 title="朋友掃碼領取">
        <div className="d-flex align-items-center">
          <div className={style.imgWrapper}>
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
              alt="我的綠籌碼code"
              fill
              style={{ objectFit: 'cover' }}
            />
            <span className="position-absolute top-50 start-50 translate-middle">
              <Coin color="green" scale={0.4}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
            </span>
          </div>

          <div className="ms-auto">
            <Button size="md">下載</Button>
          </div>
        </div>
      </SectionUI2>
      <SectionUI2 title="分享領取連結">
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_fb.png"
              alt="fb"
              width={48}
              height={48}
            />
            <span className="ms-2 ">送籌碼給 FB 朋友</span>
          </div>
          <Button size="md">分享</Button>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_line.png"
              alt="fb"
              width={48}
              height={48}
            />
            <span className="ms-2 ">送籌碼給 LINE 朋友</span>
          </div>
          <Button size="md">分享</Button>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center">
            <div
              className="text-white bg-secondary rounded-3 d-flex justify-content-center align-items-center"
              style={{ width: '48px', height: '48px' }}
            >
              <IconFriends width={28} />
            </div>
            <span className="ms-2 ">送籌碼給其他社群朋友</span>
          </div>
          <Button size="md">複製</Button>
        </div>
      </SectionUI2>

      {/* {AVATAR_LINK.others.map((user, index) => (
        <div key={user.id} className="d-flex align-items-center py-3 border-bottom">
          <Avatar src={user.image} size={52} />
          <div className="ms-2 flex-grow-1">
            <span className="fw-bold mb-1 ">{user.name}</span>
            <Button as="a" href="/user/coin_support" color="brand" size="md">
              打賞
            </Button>
          </div>
        </div>
      ))} */}
    </>
  );
};

export default AddFriends;
