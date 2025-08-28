'use client';

import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { useState, useEffect } from 'react';
import Coin from '@/components/ui/coin/Coin';
import Counter from '@/components/ui/counter/Counter';
import Search from '@/components/ui/search/Search';
import SectionUI from '@/components/ui/section/SectionUI';
import CheckBtn from '@/components/ui/button/icon/CheckBtn';

const RedCoinCounter = () => {
  const [isChosenId, setIsChosenId] = useState('');
  const [num, setNum] = useState<Record<string, string>>({});
  useEffect(() => {
    setNum((prev) => {
      const update = { ...prev };
      AVATAR_LINK.others.forEach((user) => {
        if (!(user.id in update)) {
          update[user.id] = '1';
        }
      });
      return update;
    });
  }, []);
  const handleChange = (id: string, newVal: string) => {
    setNum((prev) => ({ ...prev, [id]: newVal }));
  };

  return (
    <SectionUI>
      <div className="d-flex justify-content-end">
        <Search />
      </div>

      <section className="d-flex flex-column">
        {AVATAR_LINK.others.slice(1, 3).map((user) => (
          <div key={user.id} className="d-flex align-items-center py-3 border-bottom">
            <button type="button" className="me-2" onClick={() => setIsChosenId(String(user.id))}>
              <CheckBtn isActive={isChosenId === String(user.id)} />
            </button>
            <Coin color="red" scale={0.6}>
              <Avatar src={user.image} />
            </Coin>
            <div className="ms-3 flex-grow-1">
              <h2 className="fs-6 fw-bold mb-1 ">{user.name}</h2>
              <span className="text-coinRed fw-bold">{user.num}</span>
            </div>
            <Counter
              value={num[user.id] ?? '1'}
              onChange={(val) => handleChange(String(user.id), val)}
              min={1}
              disabled={isChosenId !== String(user.id)}
            />
          </div>
        ))}
      </section>
    </SectionUI>
  );
};

export default RedCoinCounter;
