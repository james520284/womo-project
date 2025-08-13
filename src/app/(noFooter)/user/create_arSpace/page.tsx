import CreateArSpaceClient from './CreateArSpaceClient';
import { Suspense } from 'react';

const CreateArSpace = () => {
  return (
    <>
      <Suspense>
        <CreateArSpaceClient />
      </Suspense>
    </>
  );
};

export default CreateArSpace;
