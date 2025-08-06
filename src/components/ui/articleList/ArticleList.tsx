'use client';

import { useState } from 'react';
import { GridLayout, RowLayout, FullLayout } from './ArticleListLayout';
import { FilterIcon, GridViewIcon, ListViewIcon, FullscreenIcon } from '@/components/icons/AllIcon';

type Props = {
  tab: string;
};

const ArticleList = ({ tab }: Props) => {
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
          <GridLayout tab={tab} />
        ) : viewMode === 'row' ? (
          <RowLayout tab={tab} />
        ) : (
          <FullLayout tab={tab} />
        )}
      </div>
    </>
  );
};

export default ArticleList;
