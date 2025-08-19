'use client';

import style from './InformHeader.module.scss';
import { useRouter } from 'next/navigation';
import { IconBackArrow, IconCancel } from '../icons';

const InformHeader = () => {
  const router = useRouter();

  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <button type="button" onClick={() => router.back()}>
            <IconBackArrow width={28} />
          </button>
          <h1 className="fs-5 fw-bold">通知</h1>
          <button type="button" onClick={() => router.back()}>
            <IconCancel width={28} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default InformHeader;
