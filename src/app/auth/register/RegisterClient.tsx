'use client';

import PagesHeader from '@/components/header/PagesHeader';
import RegisterOfPhone from './RegisterOfPhone';
import RegisterOfEmail from './RegisterOfEmail';
import { useSearchParams } from 'next/navigation';

const RegisterClient = () => {
  const params = useSearchParams().get('way');
  const registerWay = params === 'phone' || params === 'email' ? params : 'phone';

  return (
    <>
      {/* Header區 */}
      <PagesHeader
        titleType="img"
        imageSrc="/images/WOMO-LOGO1.png"
        imageLink="/"
        backArrowBtn={false}
      />
      {registerWay === 'phone' ? <RegisterOfPhone /> : <RegisterOfEmail />}
    </>
  );
};

export default RegisterClient;
