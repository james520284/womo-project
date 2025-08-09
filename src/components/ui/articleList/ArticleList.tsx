'use client';

import { useEffect, useState } from 'react';
import { GridLayout, RowLayout, FullLayout } from './ArticleListLayout';
import { FilterIcon, GridViewIcon, ListViewIcon, FullscreenIcon } from '@/components/icons/AllIcon';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type Props = {
  tab: string;
};

type ViewMode = 'grid' | 'row' | 'full';

const SCROLL_KEY = 'posts:list:scrollY';

const ArticleList = ({ tab }: Props) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  // ---- 回列表時還原滾動位置 ----
  useEffect(() => {
    const saved = sessionStorage.getItem(SCROLL_KEY);
    if (saved) {
      const html = document.documentElement;
      const prev = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      requestAnimationFrame(() => {
        window.scrollTo(0, parseInt(saved, 10));
        html.style.scrollBehavior = prev || '';
        sessionStorage.removeItem(SCROLL_KEY);
      });
    }
  }, []);

  // 提供給子卡片在「進入貼文前」呼叫，記住當前捲動位置
  const rememberScroll = () => {
    sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
  };

  // 1) 初始：從 URL 讀取 view，同步到本地 stat（避免 hydration 問題，放在 effect）
  useEffect(() => {
    const v = searchParams.get('view' as ViewMode) || 'grid';
    if (v === 'grid' || v === 'row' || v === 'full') {
      setViewMode(v);
    }
  }, [searchParams]);
  // 2) 點擊時：更新 state + 寫回 URL（不要在 render 階段做）
  const updateURL = (next: ViewMode) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('view', next);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const handleClickViewMode = (next: ViewMode) => {
    if (next === viewMode) return;
    setViewMode(next);
    updateURL(next);
  };

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
              handleClickViewMode('grid');
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
              handleClickViewMode('row');
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
              handleClickViewMode('full');
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
          <GridLayout tab={tab} onBeforeEnterPost={rememberScroll} />
        ) : viewMode === 'row' ? (
          <RowLayout tab={tab} onBeforeEnterPost={rememberScroll} />
        ) : (
          <FullLayout tab={tab} onBeforeEnterPost={rememberScroll} />
        )}
      </div>
    </>
  );
};

export default ArticleList;
