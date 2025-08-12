import StepForGame from '../create_article/StepForGame';
import { Suspense } from 'react';

const CreateArticle = () => {
  return (
    <>
      <Suspense>
        <StepForGame />
      </Suspense>
    </>
  );
};

export default CreateArticle;
