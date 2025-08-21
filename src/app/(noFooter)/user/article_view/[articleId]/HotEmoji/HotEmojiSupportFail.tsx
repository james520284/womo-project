'use client';

import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import { useRouter } from 'next/navigation';

const HotEmojiSupportFail = () => {
  const router = useRouter();

  return (
    <>
      <div className="d-flex flex-column align-items-center pt-10 mb-5">
        <Coin color="red" scale={1}>
          <Avatar src={AVATAR_LINK.my} />
        </Coin>
        <div className="d-flex align-items-center mt-3">
          <h2 className="fs-6 fw-bold text-primary me-2">籌碼不足</h2>
          <Button size="sm" onClick={() => router.push(`/user/coin_support?buy=${'buy'}`)}>
            去購買
          </Button>
        </div>
      </div>

      <div className="fs-sm mx-auto bg-grey-50 py-2 px-4 rounded-pill d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="me-2">需使用</span>
          <Coin color="red" scale={0.3}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <span className="ms-2 fs-6 fw-bold text-coinRed">1</span>
        </div>
        <span>
          目前剩餘顆數：<span className="text-coinRed fw-bold">0</span>
        </span>
      </div>
    </>
  );
};

export default HotEmojiSupportFail;
