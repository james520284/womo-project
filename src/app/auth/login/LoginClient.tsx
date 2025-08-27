'use client';

import { useState } from 'react';
import LoginOption from './LoginOption';
import LoginOfPhone from './LoginOfPhone';
import LoginOfEmail from './LoginOfEmail';

const LoginClient = () => {
  const [loginOption, setLoginOption] = useState<'phone' | 'email' | 'all'>('all');
  return (
    <>
      <section>
        {loginOption === 'all' ? (
          <LoginOption setLoginOption={setLoginOption} />
        ) : loginOption === 'phone' ? (
          <LoginOfPhone setLoginOption={setLoginOption} />
        ) : (
          <LoginOfEmail setLoginOption={setLoginOption} />
        )}
      </section>
    </>
  );
};

export default LoginClient;
