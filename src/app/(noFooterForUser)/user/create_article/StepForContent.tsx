import style from './StepForContent.module.scss';
import { IconPhoto, IconMicrophone, IconVideo, IconYoutube, IconCancel } from '@/components/icons';
import AutoResizeTextarea from '@/components/ui/Textarea/Textarea';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Image from 'next/image';
import { useState } from 'react';
// 套件
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';

const StepForContent = () => {
  const [isImgUpload, setIsImgUpload] = useState(true);
  return (
    <section className={`container-fluid mt-5 ${style.wrapper}`}>
      <div className="w-75 mx-auto ">
        <div className="mb-5">
          <button className="mx-1" onClick={() => setIsImgUpload(true)}>
            <IconPhoto width={32} />
          </button>
          <button className="mx-1">
            <IconMicrophone width={32} />
          </button>
          <button className="mx-1">
            <IconVideo width={32} />
          </button>
          <button className="mx-1">
            <IconYoutube width={32} />
          </button>
        </div>
      </div>
      {!isImgUpload ? (
        ''
      ) : (
        <section>
          {/* swiper主體 */}
          <Swiper
            spaceBetween={4}
            slidesPerView={1.1}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
            loop={true}
          >
            {homeBanner.map((pic, index) => (
              <SwiperSlide key={index}>
                <div className={style.imgWrapper}>
                  <Image src={pic.image} alt={`主圖${index + 1}`} fill className={style.img} />
                  <button className={style.cancelBtn} onClick={() => setIsImgUpload(false)}>
                    <IconCancel />
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}

      <div className="w-75 mx-auto mt-5 mb-20">
        <AutoResizeTextarea />
      </div>
    </section>
  );
};

export default StepForContent;
