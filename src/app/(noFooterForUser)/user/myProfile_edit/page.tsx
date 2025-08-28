import { Suspense } from 'react';
import MyProfileEditClient from './MyProfileEditClient';

const MyProfileEdit = () => {
  return (
    <Suspense>
      <MyProfileEditClient />
    </Suspense>
  );
};

export default MyProfileEdit;
