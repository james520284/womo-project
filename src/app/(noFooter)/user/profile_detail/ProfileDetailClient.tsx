'use client';

import style from './ProfileDetailClient.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { IconGenderFemale, IconFB, IconIG, IconYT } from '@/components/icons';
import Link from 'next/link';
import { useState } from 'react';
import ProfileEdit from './ProfileEdit';

const ProfileDetailClient = () => {
  const [isEditable, setIsEditable] = useState(false);
  const interest = ['撞球', '韓式料理', '懸疑片', '抒情歌', '狗狗'];
  const socialMedia = [
    <IconFB key="FB" width={34} />,
    <IconIG key="IG" width={42} />,
    <IconYT key="YT" width={36} />,
  ];
  return (
    <>
      {!isEditable ? (
        <div className={`container-fluid mt-10 ${style.wrapper}`}>
          {/* 頭像區 */}
          <section className="d-flex align-items-center">
            <Avatar src={AVATAR_LINK.my} size={100} />
            <div className="ms-3 d-flex flex-column flex-grow-1">
              <h2 className="fs-5 fw-bold">蒼田楓</h2>
              <div className="fs-sm text-muted mb-2">mapleLeaf0417</div>
              <div className="d-flex align-items-center fs-xs text-light">
                <div className="bg-primary rounded-pill px-2 py-1 me-2">
                  <span>
                    <IconGenderFemale width={14} />
                  </span>
                  <span className="ms-1">牡羊座</span>
                </div>
                <span className="bg-primary rounded-pill px-2 py-1">高雄市</span>
              </div>
            </div>
          </section>

          {/* 興趣區 */}
          <section className="mt-10">
            <h3 className="fs-6 fw-bold mb-3">我感興趣的</h3>
            <div className="d-flex align-items-center fs-sm text-dark fw-bold">
              {interest.map((item, index) => (
                <span key={index} className="bg-grey-100 rounded-pill px-2 py-1 me-2">
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* 關於我 */}
          <section className="mt-10">
            <h3 className="fs-6 fw-bold mb-3">關於我</h3>
            <div className="d-flex align-items-center fs-sm text-dark fw-bold mb-2">
              {socialMedia.map((item, index) => (
                <Link href="#" key={index} className={style.mediaIcon}>
                  {item}
                </Link>
              ))}
            </div>
            <p className="fs-sm">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam in nulla ratione
              exercitationem et voluptatibus culpa doloribus! Laboriosam debitis quam architecto.
              Aspernatur optio explicabo quam
            </p>
          </section>
        </div>
      ) : (
        <ProfileEdit setIsEditable={setIsEditable} />
      )}
    </>
  );
};

export default ProfileDetailClient;
