import CreateArticleClient from './CreateArticleClient';
import { Suspense } from 'react';

const CreateArticle = () => {
  return (
    <>
      <Suspense>
        <CreateArticleClient />
      </Suspense>
    </>
  );
};

export default CreateArticle;
