'use client';

import { useState } from 'react';
import { GridLayoutMyself, RowLayoutMyself, FullLayoutMyself } from './ArticleListLayout';
import { FilterIcon, GridViewIcon, ListViewIcon, FullscreenIcon } from '@/components/icons/AllIcon';

type Props = {
  tab: string;
};

const ArticleListMySelf = ({ tab }: Props) => {
  const [viewMode, setViewMode] = useState<'grid' | 'row' | 'full'>('grid');
  return (
    <>
      {/* 檢視/篩選功能 */}
      <div className="d-flex align-items-center justify-content-between mb-5">
        <div className="d-flex align-items-center justify-content-center">
          <button
            type="button"
            className={`mx-1 line-height-none ${
              viewMode === 'grid' ? 'text-dark' : 'text-grey-300'
            }`}
            onClick={() => {
              setViewMode('grid');
            }}
          >
            <GridViewIcon width={20} />
          </button>
          <button
            type="button"
            className={`mx-1 line-height-none ${
              viewMode === 'row' ? 'text-dark' : 'text-grey-300'
            }`}
            onClick={() => {
              setViewMode('row');
            }}
          >
            <ListViewIcon width={20} />
          </button>
          <button
            type="button"
            className={`mx-1 line-height-none ${
              viewMode === 'full' ? 'text-dark' : 'text-grey-300'
            }`}
            onClick={() => {
              setViewMode('full');
            }}
          >
            <FullscreenIcon width={20} />
          </button>
        </div>
        <button type="button" className="line-height-none">
          <FilterIcon width={20} />
        </button>
      </div>

      {/* 列表區 */}
      <div className="mb-20">
        {viewMode === 'grid' ? (
          <GridLayoutMyself tab={tab} />
        ) : viewMode === 'row' ? (
          <RowLayoutMyself tab={tab} />
        ) : (
          <FullLayoutMyself tab={tab} />
        )}
      </div>
    </>
  );
};

export default ArticleListMySelf;
