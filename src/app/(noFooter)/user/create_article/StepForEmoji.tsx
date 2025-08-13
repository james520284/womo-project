'use client';

import style from './StepForEmoji.module.scss';
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Image from 'next/image';
import { EMOJI } from '@/constants/emoji';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';

const StepForEmoji = () => {
  const searchParams = useSearchParams();
  const emojiParams = searchParams.get('emojiIndex');
  const [emojiIndex, setEmojiIndex] = useState(Number(emojiParams) ?? 0);
  return (
    <section className={`container-fluid mt-10 mb-20 ${style.wrapper}`}>
      {/* 頭像區 */}
      <section className="d-flex flex-column align-items-center">
        <div className="position-relative">
          <Coin color="green" scale={1.2}>
            <Avatar src={AVATAR_LINK.my}></Avatar>
          </Coin>
          <div className="position-absolute top-0 start-0">
            <Image
              src={EMOJI[emojiIndex].image}
              alt={EMOJI[emojiIndex].name}
              width={40}
              height={40}
              className={style.emojiImg}
            />
          </div>
        </div>

        <h3 className="fw-bold fs-6 my-5">我今天的心情是</h3>
      </section>
      <div className="w-75 mx-auto ">
        <div className="row gy-3 justify-content-evenly">
          {EMOJI.map((img, index) => (
            <div key={index} className="col-3 col-md-1 d-flex justify-content-center">
              <div>
                <button
                  type="button"
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
                      className={`${style.emojiImg}  ${
                        emojiIndex == index ? 'opacity-100' : 'opacity-50'
                      }`}
                    />
                  </div>
                  <div
                    className={` position-absolute top-0 start-0 translate-middle ${
                      emojiIndex == index ? 'd-md-block' : 'd-none'
                    }`}
                  >
                    <CheckBtn />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepForEmoji;
