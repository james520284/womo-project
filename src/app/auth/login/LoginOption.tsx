'use client';

import Image from 'next/image';
import { IconLine, IconArrow, IconApple, IconPhone, IconMail } from '@/components/icons';
import React, { useState } from 'react';

type Props = {
  setLoginOption: React.Dispatch<React.SetStateAction<'phone' | 'email' | 'all'>>;
};

const LoginOption = ({ setLoginOption }: Props) => {
  const [isOpenLoginOption, setIsOpenLoginOption] = useState(false);

  return (
    <div className="w-75 mx-auto  fw-bold fs-sm">
      {/* line登入 */}
      <button
        type="button"
        className="text-white pe-3 py-3 ps-10 rounded-pill w-100 d-flex align-items-center justify-content-center mb-3"
        style={{ backgroundColor: '#00B300' }}
      >
        <IconLine width={20} />
        <span className="ms-3" style={{ width: '144px' }}>
          用 LINE 帳號登入
        </span>
      </button>

      {/* google登入 */}
      <button
        type="button"
        className="border border-dark pe-3 py-3 ps-10 rounded-pill w-100 d-flex align-items-center justify-content-center mb-3"
      >
        <Image
          src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/icon_social_google.svg"
          alt="fb"
          width={20}
          height={20}
        />
        <span className="ms-3" style={{ width: '144px' }}>
          用 Google 帳號登入
        </span>
      </button>

      {isOpenLoginOption && (
        <>
          {/* apple登入 */}
          <button
            type="button"
            className="border border-dark  pe-3 py-3 ps-10 rounded-pill w-100 d-flex align-items-center justify-content-center mb-3 "
          >
            <IconApple width={20} />
            <span className="ms-3" style={{ width: '144px' }}>
              用 Apple 帳號登入
            </span>
          </button>

          {/* 手機登入 */}
          <button
            type="button"
            className="border border-dark  pe-3 py-3 ps-10 rounded-pill w-100 d-flex align-items-center justify-content-center mb-3"
            onClick={() => setLoginOption('phone')}
          >
            <IconPhone width={20} color="#da5271" />
            <span className="ms-3" style={{ width: '144px' }}>
              用手機號碼登入
            </span>
          </button>

          {/* Email登入 */}
          <button
            type="button"
            className="border border-dark  pe-3 py-3 ps-10 rounded-pill w-100 d-flex align-items-center justify-content-center mb-3"
            onClick={() => setLoginOption('email')}
          >
            <IconMail width={20} color="#00b0b4" />
            <span className="ms-3" style={{ width: '144px' }}>
              用 Email 帳號登入
            </span>
          </button>
        </>
      )}

      {/* 更多選項 */}
      <button
        type="button"
        className="fs-xs fw-bold d-flex align-items-center mx-auto line-height-none"
        onClick={() => setIsOpenLoginOption(!isOpenLoginOption)}
      >
        {isOpenLoginOption ? <span>更少</span> : <span>更多</span>}

        <IconArrow rotated={isOpenLoginOption} width={20} />
      </button>
    </div>
  );
};

export default LoginOption;
