import style from './CoinFriendsClient.module.scss';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Image from 'next/image';
import Button from '@/components/ui/button/submit/Button';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { IconFriends } from '@/components/icons';

const AddFriendsByGivingCoin = () => {
  return (
    <>
      {/* 數據區 */}
      <div className="d-flex align-items-center">
        <span className="ms-auto fs-sm text-muted">目前剩餘顆數：</span>
        <span className="d-flex align-items-center">
          <Coin color="green" scale={0.25}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="text-coinGreen ms-2 fs-sm">85</span>
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
            <Button size="md" color="green">
              下載
            </Button>
          </div>
        </div>
      </SectionUI2>
      <SectionUI2 title="發送領取連結">
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_fb.png"
              alt="fb"
              width={48}
              height={48}
            />
            <span className="ms-2 ">發籌碼給 FB 朋友</span>
          </div>
          <Button size="md" color="green">
            發送
          </Button>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_share_social_line.png"
              alt="fb"
              width={48}
              height={48}
            />
            <span className="ms-2">發籌碼給 LINE 朋友</span>
          </div>
          <Button size="md" color="green">
            發送
          </Button>
        </div>
        <div className="d-flex align-items-center justify-content-between py-3 border-bottom">
          <div className="d-flex align-items-center ">
            <div
              className="text-white bg-primary rounded-3 d-flex justify-content-center align-items-center flex-shrink-0"
              style={{ width: '48px', height: '48px' }}
            >
              <IconFriends width={28} />
            </div>
            <div className="ms-2 pe-2">
              <span>貼連結發籌碼</span>
              <input type="text" defaultValue={'www.womo.com.tw/user/123'} />
            </div>
          </div>
          <Button size="md" color="green">
            複製
          </Button>
        </div>
      </SectionUI2>
    </>
  );
};

export default AddFriendsByGivingCoin;
