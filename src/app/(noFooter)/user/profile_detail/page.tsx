import { Suspense } from 'react';
import ProfileDetailClient from './ProfileDetailClient';

const profileDetail = () => {
  return (
    <Suspense>
      <ProfileDetailClient />
    </Suspense>
  );
};

export default profileDetail;
