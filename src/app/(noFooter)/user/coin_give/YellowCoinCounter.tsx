'use client';

import { useState } from 'react';
import Avatar from '@/components/ui/avatar/Avatar';
import Counter from '@/components/ui/counter/Counter';
import { COINS } from '@/constants/coin';

const YellowCoinCounter = () => {
  const [num, setNum] = useState(1);
  const handleChange = (newVal: string) => {
    setNum(Number(newVal));
  };
  return (
    <>
      <div className="d-flex align-items-center py-3">
        <Avatar src={COINS[2].image} />

        <div className="ms-3 flex-grow-1">
          <span className="text-coinYellow fw-bold">{COINS[2].amount}</span>
        </div>
        <Counter
          value={String(num)}
          onChange={(val) => {
            handleChange(val);
          }}
          min={1}
        />
      </div>
    </>
  );
};

export default YellowCoinCounter;
