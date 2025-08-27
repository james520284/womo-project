'use client';

import style from './page.module.scss';
import Avatar from 'antd/es/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import {
  IconAvatarSolid,
  IconPhone,
  IconLockOutline,
  IconViewOff,
  IconView,
} from '@/components/icons';
import Button from '@/components/ui/button/submit/Button';
import { useState } from 'react';
import Link from 'next/link';

const RegisterOfEmail = () => {
  const [isUploadAvatar, setIsUploadAvatar] = useState(false);
  const [isGetCode, setIsGetCode] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isPasswordCheckVisible, setIsPasswordCheckVisible] = useState(false);
  return (
    <>
      <div className={style.wrapper}>
        {/* 頭像 */}
        <div className={style.imgWrapper}>
          {isUploadAvatar ? (
            <Avatar src={AVATAR_LINK.my} size={100} />
          ) : (
            <IconAvatarSolid width={100} color="#6c757d" />
          )}

          <div className="mt-2">
            <Button color="light" onClick={() => setIsUploadAvatar(!isUploadAvatar)}>
              {isUploadAvatar ? '更換頭像' : '上傳頭像'}
            </Button>
          </div>
        </div>

        {/* 信箱 */}
        <div className="w-75 mx-auto mb-20">
          <div className="d-flex align-items-center mb-5 position-relative">
            <IconPhone width={20} />
            <input type="email" placeholder="Email信箱" className="fs-6 ms-2" />
            <button
              type="button"
              className="position-absolute top-50 end-0 translate-middle-y  text-warning text-nowrap fs-xs"
              onClick={() => setIsGetCode(!isGetCode)}
            >
              {isGetCode ? '120秒' : '取得驗證碼'}
            </button>
          </div>

          {/* 信箱驗證碼 */}
          <div className="d-flex align-items-center  mb-5 position-relative">
            <IconLockOutline width={20} />
            <input type="tel" placeholder="信箱驗證碼" className="fs-6 ms-2" />
          </div>

          {/* 密碼 */}
          <div className="d-flex align-items-center  mb-5 position-relative">
            <IconLockOutline width={20} />
            <input
              type={isPasswordVisible ? 'tel' : 'password'}
              placeholder="密碼"
              className="fs-6 ms-2"
            />
            <button
              type="button"
              className="position-absolute top-50 start-100 translate-middle pe-5 text-warning"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <IconViewOff width={16} /> : <IconView width={16} />}
            </button>
          </div>

          {/* 確認密碼 */}
          <div className="d-flex align-items-center  mb-5 position-relative">
            <IconLockOutline width={20} />
            <input
              type={isPasswordCheckVisible ? 'tel' : 'password'}
              placeholder="再次確認密碼"
              className="fs-6 ms-2"
            />
            <button
              type="button"
              className="position-absolute top-50 start-100 translate-middle pe-5 text-warning"
              onClick={() => setIsPasswordCheckVisible(!isPasswordCheckVisible)}
            >
              {isPasswordCheckVisible ? <IconViewOff width={16} /> : <IconView width={16} />}
            </button>
          </div>

          <Button width="expand" size="sm">
            註冊
          </Button>

          <p className="fs-xs text-muted mt-5 text-center">
            更快方式？
            <Link href="/auth/login" className="me-1 text-decoration-underline text-primary">
              快速登入
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterOfEmail;
