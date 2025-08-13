import style from './StepForContent.module.scss';
import { IconPhoto, IconMicrophone, IconVideo, IconYoutube } from '@/components/icons';
import AutoResizeTextarea from '@/components/ui/Textarea/Textarea';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Image from 'next/image';

const StepForContent = () => {
  return (
    <section className={`container-fluid mt-5 ${style.wrapper}`}>
      <div className="w-75 mx-auto ">
        <div className="mb-5">
          <button className="mx-1">
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
      <section className={style.imgWrapper}>
        <Image
          src={homeBanner[0].image}
          alt={homeBanner[0].author}
          fill
          style={{ objectFit: 'cover' }}
        />
      </section>

      <div className="w-75 mx-auto mt-5 mb-20">
        <AutoResizeTextarea />
      </div>
    </section>
  );
};

export default StepForContent;
