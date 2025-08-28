'use client';

import RedCoinGameHeader from '@/components/header/RedCoinGameHeader';
import RedCoinGameListNotPlay from './RedCoinGameListNotPlay';
import RedCoinGameListOnGoing from './RedCoinGameListOnGoing';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';

const RedCoinGameListClient = () => {
  const [gameStatus, setGameStatus] = useState<'playing' | 'notPlay'>('playing');
  return (
    <>
      {/* Header區 */}
      <RedCoinGameHeader />

      <div className="container-fluid mt-10">
        {/* 互動狀態 */}
        <Tab isActive={gameStatus === 'playing'} onClick={() => setGameStatus('playing')}>
          正在進行
        </Tab>
        <Tab isActive={gameStatus === 'notPlay'} onClick={() => setGameStatus('notPlay')}>
          還沒開始
        </Tab>

        {/* 互動列表區 */}
        {gameStatus === 'playing' ? <RedCoinGameListOnGoing /> : <RedCoinGameListNotPlay />}
      </div>
    </>
  );
};

export default RedCoinGameListClient;
