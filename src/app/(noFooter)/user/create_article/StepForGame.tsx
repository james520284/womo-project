'use client';

import style from './StepForGame.module.scss';
import CreateArticleHeader from '@/components/header/CreateArticleHeader';
import { ACTIVITY } from '@/constants/activity';
import { useState } from 'react';
import { coinGameType } from '@/types/coinGameType';

const StepForGame = () => {
  const [tab, setTab] = useState<coinGameType>('give');

  return (
    <>
      <CreateArticleHeader />
      <div className={`container-fluid mt-5 ${style.wrapper}`}>
        <div className="w-75 mx-auto">
          <h2 className="fs-6 fw-bold mb-4">添加互動</h2>

          <div className="row  gy-3">
            {ACTIVITY.map((game) => (
              <div key={game.title} className="col-3">
                <button
                  type="button"
                  onClick={() => setTab(game.brief)}
                  className={`${style.gameTab} ${tab === game.brief ? style.gameTabActive : ''}`}
                >
                  <game.icon width={24} />
                  <span className="fs-xs fw-bold mt-1">{game.title}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepForGame;
