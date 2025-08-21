import { IconHot, IconLove } from '@/components/icons';
import Coin from '@/components/ui/coin/Coin';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Avatar from '@/components/ui/avatar/Avatar';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import React from 'react';

type Props = {
  setSupportState: React.Dispatch<React.SetStateAction<string>>;
};

const HotEmojiSupportDesc = ({ setSupportState }: Props) => {
  return (
    <>
      {/* 標題區 */}
      <section className="text-center mb-8">
        <IconHot width={60} color="#cd506d" />
        <h2 className="fs-4 fw-bold text-primary">推爆+1</h2>
      </section>

      {/* 內容區 */}
      <section className="mx-auto">
        <span className="fw-bold mb-2">支持+推爆喜愛的創作者</span>
        <ul className="fs-sm">
          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <span className="mx-1">只要購買</span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，創作者就能獲得分潤！</span>
          </li>

          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <span className="mx-1">丟出 1 顆</span>
            <Coin color="red" scale={0.3}>
              <Avatar src={AVATAR_LINK.my} />
            </Coin>
            <span className="ms-1">，推爆這則貼文！</span>
          </li>

          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <span className="mx-1">推爆越多次，演算法加持，貼文會被更多人看見！</span>
          </li>

          <li className="mb-2 d-flex align-items-center">
            <IconLove width={16} color="#cd506d" />
            <p className="ms-1">你的頭像將置頂在這則貼文，榮耀展示！</p>
          </li>
        </ul>
        <div className="text-center mt-5">
          <Button width="expand" onClick={() => setSupportState('success')}>
            丟籌碼 推爆！ (成功狀態)
          </Button>
        </div>
        <div className="text-center mt-3">
          <ButtonOutline width="expand" onClick={() => setSupportState('fail')}>
            丟籌碼 推爆！ (失敗狀態)
          </ButtonOutline>
        </div>
      </section>
    </>
  );
};

export default HotEmojiSupportDesc;
