'use client';

import style from './ProfileDetailHeader.module.scss';
import Avatar from '../ui/avatar/Avatar';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IconBackArrow, IconEditOutline } from '../icons';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';

type Props = {
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileDetailHeader = ({ setIsEditable }: Props) => {
  const router = useRouter();

  return (
    <header className={`${style.header} `}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <IconBackArrow width={28} />
          </button>
          <Link href="/user/my_profile">
            <Avatar src={AVATAR_LINK.my} size={48} />
          </Link>
          <button className="btn" onClick={() => setIsEditable(true)}>
            <IconEditOutline width={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default ProfileDetailHeader;
