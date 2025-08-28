'use client';

import PagesHeader from '@/components/header/PagesHeader';
import style from './CreateArSpaceClient.module.scss';
import StepForArBuild from './StepForArBuild';
import StepForEmoji from '../create_article/StepForEmoji';
import StepForContent from '../create_article/StepForContent';
import StepForGame from '../create_article/StepForGame';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';

const CreateArSpaceClient = () => {
  const steps = [
    <StepForArBuild key="arSpace" />,
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
      <PagesHeader titleType="txt" titleTxt="新增AR空間" cancelBtn={true} />

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

        {currentPageIndex !== steps.length - 1 ? (
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

export default CreateArSpaceClient;
