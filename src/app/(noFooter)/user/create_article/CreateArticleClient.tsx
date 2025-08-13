'use client';

import CreateArticleHeader from '@/components/header/CreateArticleHeader';
import style from './CreateArticleClient.module.scss';
import StepForEmoji from './StepForEmoji';
import StepForContent from './StepForContent';
import StepForGame from './StepForGame';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';

const CreateArticleClient = () => {
  const steps = [
    <StepForEmoji key="emoji" />,
    <StepForContent key="content" />,
    <StepForGame key="game" />,
  ];

  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const goNext = () => {
    setCurrentPageIndex((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const goPrev = () => {
    setCurrentPageIndex((prev) => Math.max(prev - 1, 0));
  };

  return (
    <>
      {/* Header區 */}
      <CreateArticleHeader />

      {/* 內容區 */}
      {steps[currentPageIndex]}

      {/* 送出鍵 */}
      <div className={style.pageControl}>
        {currentPageIndex !== 0 ? (
          <button type="button" className="text-muted fs-sm" onClick={goPrev}>
            上一步
          </button>
        ) : (
          ''
        )}

        {currentPageIndex !== 2 ? (
          <button type="button" className="text-primary fs-sm ms-auto" onClick={goNext}>
            下一步
          </button>
        ) : (
          <Button color="brand" size="md">
            發佈
          </Button>
        )}
      </div>
    </>
  );
};

export default CreateArticleClient;
