import style from './ArticleHeader.module.scss';
import {
  ArticleHeaderFuncBtn,
  ArticleHeaderBackBtn,
} from '@/app/(noFooter)/user/article_view/[articleId]/ArticleFuncClient';
import Avatar from '../ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Link from 'next/link';

const ArticleHeader = () => {
  return (
    <header className={style.header}>
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center py-5">
          <div className="d-flex align-items-center">
            <ArticleHeaderBackBtn />
            <div className="d-flex align-items-center ms-5">
              <Link href="/user/my_profile">
                <Avatar src={AVATAR_LINK.my} size={40} />
              </Link>
              <div className="text-start ms-2">
                <h1 className="h6 fw-bold d-flex align-items-center fs-sm">
                  蒼田楓 — 覺得開心 <span>😝</span>
                </h1>
                <p className="fs-xs text-muted">2025年8月4日</p>
              </div>
            </div>
          </div>
          <ArticleHeaderFuncBtn />
        </div>
      </div>
    </header>
  );
};

export default ArticleHeader;
