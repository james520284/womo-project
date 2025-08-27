import RegisterClient from './RegisterClient';
import { Suspense } from 'react';

const Register = () => {
  return (
    <Suspense>
      <RegisterClient />;
    </Suspense>
  );
};

export default Register;
