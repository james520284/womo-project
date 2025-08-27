'use client';
import { IconMail, IconLockOutline, IconView, IconViewOff } from '@/components/icons';
import Link from 'next/link';
import Button from '@/components/ui/button/submit/Button';
import { useState } from 'react';

type Props = {
  setLoginOption: React.Dispatch<React.SetStateAction<'phone' | 'email' | 'all'>>;
};

const LoginOfEmail = ({ setLoginOption }: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <div className="w-75 mx-auto mb-20">
      <div className="d-flex align-items-center mb-5">
        <IconMail width={20} />
        <input type="tel" placeholder="Email信箱" className="fs-6 ms-2" />
      </div>
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
      <div className="text-end mb-10">
        <Link href="/auth/forget_password" className="fs-xs text-muted">
          忘記密碼？
        </Link>
      </div>

      <Button width="expand">登入</Button>

      <div className="fs-xs text-muted mt-5 text-center">
        還沒有帳號？&emsp;
        <button
          type="button"
          className="me-2 text-decoration-underline text-primary"
          onClick={() => setLoginOption('all')}
        >
          快速登入
        </button>
        或
        <Link
          href="/auth/register?way=email"
          className="ms-2 text-decoration-underline text-primary"
        >
          Email註冊
        </Link>
      </div>
    </div>
  );
};

export default LoginOfEmail;
