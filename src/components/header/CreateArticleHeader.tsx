'use client';

import style from './CreateArticleHeader.module.scss';
import { useRouter } from 'next/navigation';
import { IconBackArrow, IconCancel, IconFriendsList } from '../icons';

const CreateArticleHeader = () => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button className="btn" onClick={() => router.back()}>
            <IconBackArrow width={28} />
          </button>
          <h1 className="fs-5 fw-bold">新增籌碼貼文</h1>
          <button type="button">
            <IconCancel width={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default CreateArticleHeader;
