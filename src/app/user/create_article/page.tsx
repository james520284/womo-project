// [本頁目的]：個人貼文新增內頁
import CreateArticleClient from './CreateArticleClient';
import { Suspense } from 'react';

const CreateArticle = () => {
  return (
    <>
      <Suspense>
        <CreateArticleClient />;
      </Suspense>
    </>
  );
};

export default CreateArticle;
