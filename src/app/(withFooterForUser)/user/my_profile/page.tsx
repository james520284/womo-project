import { Suspense } from 'react';
import MyProfileClient from './MyProfileClient';

const myProfile = () => {
  return (
    <Suspense>
      <MyProfileClient />
    </Suspense>
  );
};

export default myProfile;
