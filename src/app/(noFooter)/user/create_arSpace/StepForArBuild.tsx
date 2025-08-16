import style from './StepForArBuild.module.scss';
import { IconPhoto, IconCancel, IconExclamationMarkCircle, IconSearch } from '@/components/icons';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Image from 'next/image';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';

const StepForArBuild = () => {
  const [isLocation, setIsLocation] = useState(false);
  const [isImgUpload, setIsImgUpload] = useState(false);
  return (
    <section className={`container-fluid mt-10 ${style.wrapper}`}>
      <div className="w-75 mx-auto ">
        <div className="mb-10">
          <div className="d-flex align-items-center justify-content-between mb-3">
            <h2 className="fs-6 fw-bold">AR空間在哪裡</h2>
            <Button size="sm" onClick={() => setIsLocation(true)}>
              搜地圖
            </Button>
          </div>

          {!isLocation ? (
            <input type="text" placeholder="寫上地點或店名" />
          ) : (
            <div className="d-flex align-items-center fs-sm">
              <button type="button" onClick={() => setIsLocation(false)}>
                <IconCancel width={20} />
              </button>
              <p>駁二藝術特區 / 高雄市鹽埕區大勇路1號</p>
            </div>
          )}
        </div>

        <h2 className="fs-6 fw-bold mb-2">AR空間召喚圖</h2>

        <div className={style.imgWrapper}>
          {!isImgUpload ? (
            <button type="button" className={style.imgUpload} onClick={() => setIsImgUpload(true)}>
              <div className="mx-1 mb-5">
                <IconPhoto width={32} />
              </div>
            </button>
          ) : (
            <>
              <Image src={homeBanner[0].image} alt="AR召喚圖" fill className={style.img} />
              <button className={style.cancelBtn} onClick={() => setIsImgUpload(false)}>
                <IconCancel />
              </button>
            </>
          )}
        </div>
        <div className="mt-2 fs-xs d-flex align-items-start text-muted">
          <IconExclamationMarkCircle width={16} />
          <p className="ms-1">
            請使用明亮、清晰、簡單好辨識的圖片（如 Logo、物品照、明確的場景照）。
          </p>
        </div>
        <div className="mt-2 fs-xs d-flex align-items-start text-muted">
          <IconExclamationMarkCircle width={16} />
          <p className="ms-1">
            避免複雜或模糊圖案，因用戶需找到完全相同圖案掃描，才能成功召喚 AR 空間。
          </p>
        </div>
      </div>
    </section>
  );
};

export default StepForArBuild;
