'use client';

import style from './ArticleFuncClient.module.scss';
import { IconShare, IconMore, IconHot, IconSend, IconBackArrow } from '@/components/icons';
import { useState } from 'react';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import Coin from '@/components/ui/coin/Coin';
import { useRouter } from 'next/navigation';
import HotEmojiSupport from './HotEmoji/HotEmojiSupport';
import { SideSheet } from '@/components/sideSheet/SideSheet';

// Header的返回鍵
export const ArticleHeaderBackBtn = () => {
  const router = useRouter();

  return (
    <button onClick={() => router.back()}>
      <IconBackArrow width={20} />
    </button>
  );
};

// Header的功能鍵
export const ArticleHeaderFuncBtn = () => {
  return (
    <div className="d-flex align-items-center">
      <button>
        <IconShare width={20} />
      </button>
      <button className="ms-5">
        <IconMore width={24} />
      </button>
    </div>
  );
};

// 貼文回覆鍵/籌碼互動鍵
export const ArticleReplyBar = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  return (
    <div className="row align-items-center gx-1 gy-0">
      <div
        className={`d-flex align-items-center position-relative ${
          isInputFocused ? 'col-11' : 'col-8'
        } `}
      >
        <Link href="#">
          <Avatar src={AVATAR_LINK.my} size={40} />
        </Link>
        <textarea
          className={`form-control ${style.reply}`}
          id="reply"
          placeholder="我想說..."
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          rows={1}
        />
        {!isInputFocused && (
          <SideSheet
            side="bottom"
            title="推爆貼文"
            titleHidden
            trigger={
              <button type="button" className={style.hotIcon}>
                <IconHot width={32} />
              </button>
            }
          >
            <HotEmojiSupport />
          </SideSheet>
        )}
      </div>
      {!isInputFocused ? (
        <div className="col-4">
          <button type="button" className={style.coinActionBtn}>
            <div className={style.coinWrapper}>
              <Coin color="green" scale={0.3}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
            </div>
            <span className="ms-3 fw-bold fs-sm text-light">領取</span>
          </button>
        </div>
      ) : (
        <div className="col-1">
          <button type="button" className="text-secondary">
            <IconSend width={24} />
          </button>
        </div>
      )}
    </div>
  );
};
