'use client';

import style from './FriendsNewPost.module.scss';
import Link from 'next/link';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import ArrowSolidIcon from '../icons/ArrowSolid';

const FriendsNewPost = () => {
  return (
    <>
      <div className={`container-fluid ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex mt-5">
          <div className="d-flex flex-column align-items-center">
            <Link href="/user/my_profile" className={`position-relative ${style.myPost}`}>
              <Avatar src={AVATAR_LINK.my} />
            </Link>
            <span className="fs-xs mt-2">我</span>
            <div className={style.arrowSolidIcon}>
              <ArrowSolidIcon color="#da5271" width={16} />
            </div>
          </div>
          {AVATAR_LINK.others.map((user) => (
            <div key={user.name} className="d-flex flex-column align-items-center ms-5">
              <div className={style.newPostAlarm}>
                <Avatar src={user.image} />
              </div>
              <span className="fs-xs mt-2">{user.name}</span>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default FriendsNewPost;
