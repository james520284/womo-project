// [本頁目的]：首頁 - 時事聚點

import style from './HotEventsPreview.module.scss';
import Image from 'next/image';
//元件
import Link from 'next/link';
import Button from '../ui/button/submit/Button';
import SectionUI from '../ui/section/SectionUI';
//const
import { events } from '@/libs/api/events';

const HotEventsPreview = () => {
  return (
    <section className="mt-10 mb-20">
      <div className={`container-fluid ${style.wrapper}`}>
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="h5 fw-bold">時事聚點</h2>
          <Link href="/">
            <span className={style.link}>探索更多 〉</span>
          </Link>
        </div>

        <SectionUI>
          <div className="row row-cols-lg-3 flex-column flex-lg-row">
            {events.slice(0, 3).map((event, index) => (
              <div key={index} className={`${style.coinRecommend}`}>
                <div className="d-flex justify-content-between align-items-center flex-lg-column align-items-lg-stretch">
                  <div className="d-flex flex-lg-column justify-content-lg-center align-items-center py-5 flex-grow-1">
                    <div className={style.imgWrapper}>
                      <Image
                        src={event.image}
                        alt={event.name}
                        fill
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className="ms-3 mt-lg-2 text-lg-center">
                      <h2 className="h6 fw-bold">{event.name}</h2>
                      <p className="text-muted">{event.content}</p>
                    </div>
                  </div>
                  <div className="gap-2 d-flex flex-column flex-lg-row  justify-content-lg-center align-items-end align-items-lg-center">
                    <div className={style.btnWrapper}>
                      <Button as="a" href="/" size="small" color="secondary" width="expand">
                        用AR開始聊
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionUI>
      </div>
    </section>
  );
};

export default HotEventsPreview;
