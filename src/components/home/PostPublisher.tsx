// [本頁目的]：首頁 - 個人發佈貼文

'use client';

import style from './PostPublisher.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/ui/button/submit/Button';
import CheckBtn from '../ui/button/icon/CheckBtn';
import SectionUI from '../ui/section/SectionUI';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { EMOJI } from '@/constants/emoji';

const PostPublisherClient = () => {
  const [emojiIndex, setEmojiIndex] = useState(0);
  const router = useRouter();

  const handleEmojiBtn = () => {
    router.push(`/user/create_article?emojiIndex=${emojiIndex}`);
  };

  return (
    <section className={style.bg}>
      <div className={`container ${style.wrapper}`}>
        <SectionUI>
          <div className={style.contentBar}>
            <Link href="/user/create_article" className="fs-sm">
              發心情給持有我籌碼的人
            </Link>
            <div className={style.contentBtn}>
              <Button size="lg" onClick={handleEmojiBtn} color="brand">
                發心情
              </Button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            {EMOJI.map((img, index) => (
              <button
                type="button"
                key={index}
                onClick={() => setEmojiIndex(index)}
                className={`${style.EmojiOuter} ${
                  emojiIndex == index ? style.EmojiOuterActive : ''
                } `}
              >
                <div className="position-relative text-center">
                  <Image
                    src={img.image}
                    alt={img.name}
                    layout="responsive"
                    width={48}
                    height={48}
                    className={`${style.emojiImg} ${
                      emojiIndex == index ? 'opacity-100' : 'opacity-50'
                    }`}
                  />
                  <div
                    className={`d-md-none position-absolute top-0 start-0 translate-middle ${
                      emojiIndex == index ? 'd-block' : 'd-none'
                    }`}
                  >
                    <CheckBtn />
                  </div>
                </div>
                <div
                  className={`d-none position-absolute top-0 start-0 translate-middle ${
                    emojiIndex == index ? 'd-md-block' : 'd-none'
                  }`}
                >
                  <CheckBtn />
                </div>
              </button>
            ))}
          </div>
        </SectionUI>
      </div>
    </section>
  );
};

export default PostPublisherClient;
