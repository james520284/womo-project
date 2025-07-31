import { Suspense } from 'react';
import IpIncomeClient from './IpIncomeClient';

const IpIncome = () => {
  return (
    <Suspense>
      <IpIncomeClient />
    </Suspense>
  );
};

export default IpIncome;
