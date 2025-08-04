'use client';

import style from './ArticleReplyClient.module.scss';
import { useState } from 'react';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';
import MoodIcon from '@/components/icons/Mood';
import Coin from '../coin/Coin';
import SendIcon from '@/components/icons/Send';

const ArticleReplyClient = () => {
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
          <button type="button" className={style.moodIcon}>
            <MoodIcon width={24} />
          </button>
        )}
      </div>
      {!isInputFocused ? (
        <div className="col-4">
          <button
            type="button"
            className="d-flex align-items-center justify-content-center bg-secondary rounded w-100 py-1"
          >
            <div className={style.coinWrapper}>
              <Coin color="green" scale={0.3}>
                <Avatar src={AVATAR_LINK.my} />
              </Coin>
            </div>
            <span className="ms-2 fw-bold fs-sm text-light">領取</span>
          </button>
        </div>
      ) : (
        <div className="col-1">
          <button type="button" className="text-secondary">
            <SendIcon width={24} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ArticleReplyClient;
