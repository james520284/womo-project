import style from './page.module.scss';
import ArticleHeader from '@/components/header/ArticleHeader';
import { homeBanner } from '@/libs/api/banner/homeBanner';
import Image from 'next/image';
import { ViewSolidIcon, MoodIcon, ChatIcon, CoinEmojiIcon } from '@/components/icons/AllIcon';
import { ArticleReplyBar } from '@/components/functionClient/ArticleFuncClient';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';

const articleView = () => {
  return (
    <div className="position-relative">
      <ArticleHeader />
      <section className="container-fluid">
        <p className="fs-sm my-5">
          今天走進了一片幾乎以為不存在的地方。 從清晨開始翻山越嶺，只為了那個傳說中的「沉睡綠洲」。
          <br />
          <br />
          當夕陽染紅岩壁，我終於站上這塊高地，眼前竟真有一片綠意在沙漠中閃爍——靜靜地、像從未被打擾過的夢。
          <br />
          <br />
          我沒立刻靠近，只是靜靜望著它。 也許有些地方，不是為了被征服，而是為了被敬畏。
        </p>
      </section>

      <section className={style.imgWrapper}>
        <Image
          src={homeBanner[0].image}
          alt={homeBanner[0].author}
          fill
          style={{ objectFit: 'cover' }}
        />
      </section>

      <div className="container-fluid">
        <section className=" mt-3 mb-5 d-flex align-items-center text-grey-400">
          <div>
            <ViewSolidIcon width={20} />
            <span className="fs-xs fw-bold">13.5K</span>
          </div>
          <div className="ms-2">
            <MoodIcon width={20} />
            <span className="fs-xs fw-bold">598</span>
          </div>
          <div className="ms-2">
            <ChatIcon width={20} />
            <span className="fs-xs fw-bold">46</span>
          </div>
          <div className="ms-2">
            <CoinEmojiIcon width={20} />
            <span className="fs-xs fw-bold">97</span>
          </div>
        </section>

        <section className="border-bottom pb-3">
          {AVATAR_LINK.others.map((user) => (
            <Link
              key={user.name}
              href="#"
              className="position-relative me-3"
              style={{ display: 'inline-block' }}
            >
              <Avatar src={user.image} size={60} />
              <span className={style.avatarEmoji}>{user.emoji}</span>
            </Link>
          ))}
        </section>

        <section className="my-5">
          {AVATAR_LINK.others.map((user) => (
            <div key={user.name} className="d-flex align-items-start fs-sm mb-3">
              <div>
                <Avatar src={user.image} size={40} />
              </div>
              <div className="d-flex flex-column ms-2">
                <div className="d-flex align-items-center">
                  <span className="fw-bold">{user.name}</span>
                  <span className="text-muted fs-xs">．1天</span>
                </div>
                <p className="py-1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio nihil doloribus
                  soluta culpa vero incidunt, velit quod error provident quidem magni eum porro,
                  perspiciatis officia
                </p>
                <div>
                  <span className="text-muted fs-xs">回覆</span>
                  <span className="text-muted fs-xs ms-3">隱藏</span>
                  <span className="text-muted fs-xs ms-3">打賞</span>
                </div>
              </div>
            </div>
          ))}
        </section>
      </div>

      <div className="container-fluid position-sticky bottom-0 bg-light py-2">
        <ArticleReplyBar />
      </div>
    </div>
  );
};

export default articleView;
