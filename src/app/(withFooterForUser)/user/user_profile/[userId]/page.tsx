import { Suspense } from 'react';
import UserProfileClient from './UserProfileClient';

const UserProfile = () => {
  return (
    <Suspense>
      <UserProfileClient />
    </Suspense>
  );
};

export default UserProfile;
