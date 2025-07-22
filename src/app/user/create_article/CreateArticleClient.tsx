'use client';
import { useState } from 'react';
import style from './CreateArticleClient.module.scss';
// import Image from 'next/image';
import Link from 'next/link';
// import { useSearchParams } from 'next/navigation';
// import { Suspense } from 'react';

// libs
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
// 元件
import Coin from '@/components/ui/coin/Coin';
import Avatar from '@/components/ui/avatar/Avatar';
import LocationIcon from '@/components/icons/Location';
import PagesHeader from '@/components/header/PagesHeader';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';
import CheckBtn2 from '@/components/ui/button/icon/CheckBtn2';
import Button from '@/components/ui/button/submit/Button';
// const
// import { EMOJI } from '@/constants/emoji';
import { ACTIVITY } from '@/constants/activity';
// icon
import PhotoIcon from '@/components/icons/Photo';
import MicrophoneIcon from '@/components/icons/Microphone';
import VideoIcon from '@/components/icons/Video';
import YoutubeIcon from '@/components/icons/Youtube';
import ArrowIcon from '@/components/icons/Arrow';
import AddIcon from '@/components/icons/Add';
// 元件

const CreateArticleClient = () => {
  // const searchParams = useSearchParams();
  // const emojiParams = searchParams.get('emojiIndex');
  // const [emojiIndex, setEmojiIndex] = useState(emojiParams ?? 0);
  const [selectedActivity, setSelectedActivity] = useState('');
  const [isShowAllActivity, setIsShowAllActivity] = useState(false);
  const [selectedSendMyCoin, setSelectedSendMyCoin] = useState(false);

  const handleActivityOption = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSelectedActivity(e.target.value);

  return (
    <>
      <PagesHeader />
      <div className={`container-fluid ${style.wrapper} mt-5`}>
        <div className="d-flex align-items-center">
          <Coin color="green" scale={0.8}>
            <Avatar src={AVATAR_LINK.my} />
          </Coin>
          <p className="text-muted fw-bold ms-5">
            您正在
            <LocationIcon width={16} className="text-secondary" />
            <Link href="#" className="text-secondary text-decoration-underline">
              森林小樹屋度假村
            </Link>
            打卡
          </p>
        </div>

        <form action="" className="mb-20">
          {/* <Suspense>
            <SectionUI2 title="今日的心情標籤是什麼...">
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
                        style={{ maxWidth: '48px', height: 'auto' }}
                        className={`${emojiIndex == index ? 'opacity-100' : 'opacity-50'}`}
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
            </SectionUI2>
          </Suspense> */}

          <SectionUI2 title="想說些什麼呢？">
            <div className="form-floating mb-5">
              <textarea
                className={`form-control ${style.formControl}`}
                placeholder="Leave a comment here"
                id="floatingTextarea"
                style={{
                  height: '240px',
                  resize: 'none',
                }}
              ></textarea>
              <label htmlFor="floatingTextarea">我想說...</label>
            </div>
            <div>
              <button className="mx-1">
                <PhotoIcon width={32} />
              </button>
              <button className="mx-1">
                <MicrophoneIcon width={32} />
              </button>
              <button className="mx-1">
                <VideoIcon width={32} />
              </button>
              <button className="mx-1">
                <YoutubeIcon width={32} />
              </button>
            </div>
          </SectionUI2>

          <SectionUI2 title="添加互動">
            {ACTIVITY.map((act, index) => (
              <div
                key={act.title}
                className={`form-check my-3 ${style.formCheck} ${
                  !isShowAllActivity && index >= 3 ? 'd-none' : ''
                }`}
              >
                <input
                  className="form-check-input btn-check"
                  type="radio"
                  name="activityOption"
                  id={`option${index + 1}`}
                  value={act.title}
                  onChange={handleActivityOption}
                />
                <div className="d-flex align-items-center">
                  <label
                    className="form-check-label d-flex align-items-center"
                    htmlFor={`option${index + 1}`}
                  >
                    <CheckBtn isActive={selectedActivity === `${act.title}`} />
                  </label>
                  <span className={`${style.actTitle}  ${index === 0 ? style.firstTitle : ''}`}>
                    {act.title}
                  </span>
                  <p>{act.desc}</p>
                </div>
              </div>
            ))}

            <div className="w-100 text-center fs-sm">
              <button type="button" onClick={() => setIsShowAllActivity(!isShowAllActivity)}>
                {isShowAllActivity ? '隱藏更多' : '更多互動'} &nbsp;
                <span
                  style={{
                    transform: `${isShowAllActivity ? 'rotate(0deg)' : 'rotate(180deg)'}`,
                  }}
                >
                  <ArrowIcon width={16} />
                </span>
              </button>
            </div>
          </SectionUI2>
          {selectedActivity === '贈幣' && (
            <SectionUI2 title="贈幣">
              <button
                type="button"
                className="d-flex align-items-center"
                onClick={() => setSelectedSendMyCoin(!selectedSendMyCoin)}
              >
                <CheckBtn2 isActive={selectedSendMyCoin === true} />
                <span className="ms-2">贈送自己的綠籌碼</span>
              </button>
              <div className={style.sendCoinWrapper}>
                <div className="py-5 d-flex flex-column align-items-center justify-content-center">
                  <button type="button" className="noText">
                    <Coin scale={1} color="green">
                      <div className={style.coinBg}>
                        <AddIcon />
                      </div>
                    </Coin>
                  </button>
                  <span className="py-1 text-secondary fw-bold fs-5">籌碼</span>
                  <span className="text-secondary fw-bold fs-3">0</span>
                </div>
                <div className="text-center fs-sm border-top py-5">
                  <p>選擇籌碼包內的籌碼，送給留言者</p>
                  <p className="text-muted">每位限領一顆，送完為止</p>
                </div>
              </div>
            </SectionUI2>
          )}

          <div className="py-5 text-center">
            <Button size="small">發布 〉</Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateArticleClient;
