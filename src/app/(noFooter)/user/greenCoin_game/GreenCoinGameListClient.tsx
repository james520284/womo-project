'use client';

import GreenCoinGameHeader from '@/components/header/GreenCoinGameHeader';
import GameListOnGoing from './GameListOnGoing';
import GameListNotPlay from './GameListNotPlay';
import { Tab } from '@/components/ui/tab/Tab';
import { useState } from 'react';

const GreenCoinGameListClient = () => {
  const [gameStatus, setGameStatus] = useState<'playing' | 'notPlay'>('playing');
  return (
    <>
      {/* Header區 */}
      <GreenCoinGameHeader />

      <div className="container-fluid mt-10">
        {/* 互動狀態 */}
        <Tab isActive={gameStatus === 'playing'} onClick={() => setGameStatus('playing')}>
          正在進行
        </Tab>
        <Tab isActive={gameStatus === 'notPlay'} onClick={() => setGameStatus('notPlay')}>
          還沒開始
        </Tab>

        {/* 互動列表區 */}
        {gameStatus === 'playing' ? <GameListOnGoing /> : <GameListNotPlay />}
      </div>
    </>
  );
};

export default GreenCoinGameListClient;
