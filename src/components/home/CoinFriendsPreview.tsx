// [本頁目的]：首頁 - 誰擁有我的籌碼

'use client';

import style from './CoinFriendsPreview.module.scss';
import Image from 'next/image';
import { useState } from 'react';
import GiveMyCoin from '../modal/GiveMyCoin';
import Avatar from '../ui/avatar/Avatar';
import Button from '../ui/button/submit/Button';
import ButtonOutline from '../ui/button/submit/ButtonOutline';
import DoubleCoins from '../ui/coin/DoubleCoins';
import SectionUI from '../ui/section/SectionUI';
import { useRouter } from 'next/navigation';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

const CoinFriendsPreview = () => {
  const router = useRouter();
  const [giveMyCoinModal, setGiveMyCoinModal] = useState(false);

  return (
    <section className="my-10">
      <div className={`container-fluid ${style.wrapper}`}>
        {AVATAR_LINK.others.length > 0 ? (
          <>
            <h2 className="h6 fw-bold mb-2">
              共 <span className="fs-4 text-secondary">66</span> 人持有我的籌碼
            </h2>

            <SectionUI>
              {/* 行動呼籲按鈕 */}
              <div className="d-flex justify-content-center align-items-center mb-lg-5">
                <div>
                  <Button size="md" color="green" onClick={() => setGiveMyCoinModal(true)}>
                    發籌碼給更多人
                  </Button>
                </div>
                <div className="ms-1">
                  <ButtonOutline size="md" color="green" onClick={() => router.push('/')}>
                    呼叫應援
                  </ButtonOutline>
                </div>
              </div>

              {/* 列表區 */}
              <div className="row row-cols-lg-3 flex-column flex-lg-row">
                {AVATAR_LINK.others.map((user, index) => (
                  <div key={index} className={`${style.coinFriend}`}>
                    <div className="d-flex justify-content-lg-center align-items-center py-5 ">
                      <Avatar src={user.image} href="/" />
                      <div className="ms-3">
                        <h2 className="h6 fw-bold">{user.name}</h2>
                        <div className="d-flex align-items-center mt-1">
                          <span>持有</span>
                          <div className="px-2">
                            <DoubleCoins scale={0.3}>
                              <Avatar src={AVATAR_LINK.my} />
                            </DoubleCoins>
                          </div>
                          <span className="text-primary fw-bold">123</span>
                          <span>顆</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <Button as="a" href="/" size="md" color="light" width="expand">
                  查看更多 〉
                </Button>
              </div>
            </SectionUI>
          </>
        ) : (
          <SectionUI align="center">
            <Image
              src="https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/icon/icon_no_user_list.png"
              alt="尚無內容"
              width={80}
              height={0}
              style={{ height: 'auto' }}
            ></Image>
            <p>
              <span className="mb-2">目前沒有朋友持有您的籌碼，立即發籌碼給朋友</span>
              <Button size="md" color="green" onClick={() => setGiveMyCoinModal(true)}>
                發籌碼
              </Button>
            </p>
          </SectionUI>
        )}
      </div>

      {/* Modal */}
      <GiveMyCoin open={giveMyCoinModal} onOpenChange={setGiveMyCoinModal} />
    </section>
  );
};

export default CoinFriendsPreview;
