'use client';

import style from './CoinFriendsClient.module.scss';
import CoinFriendsHeader from '@/components/header/CoinFriendsHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { FilterIcon } from '@/components/icons/AllIcon';

const CoinFriendsClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'all' | 'iHave' | 'youHave'>('all');
  return (
    <>
      {isMobile || isTablet ? <CoinFriendsHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 頁籤區 */}
        <section className="mt-8">
          <div className="mb-5 d-flex align-items-center">
            <button
              type="button"
              className={tab === 'all' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('all')}
            >
              全部&nbsp;
              {tab === 'all' && <span className="text-grey-300 ms-1 fs-xs">658人</span>}
            </button>
            <button
              type="button"
              className={tab === 'iHave' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('iHave')}
            >
              我有對方籌碼&nbsp;
              {tab === 'iHave' && <span className="text-grey-300 ms-1 fs-xs">135人</span>}
            </button>
            <button
              type="button"
              className={tab === 'youHave' ? style.tabBtnActive : style.tabBtn}
              onClick={() => setTab('youHave')}
            >
              對方有我籌碼&nbsp;
              {tab === 'youHave' && <span className="text-grey-300 ms-1 fs-xs">523人</span>}
            </button>
          </div>
          <div className="d-flex justify-content-end">
            <FilterIcon width={20} />
          </div>
        </section>

        {/* 列表區 */}
        <section>
          <div className="d-flex align-items-center py-3 border-bottom">
            <Avatar src={AVATAR_LINK.others[0].image} size={52} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold mb-1 ">{AVATAR_LINK.others[0].name}</span>
              <div className="d-flex  align-items-center justify-content-between fs-sm">
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">互有彼此籌碼</span>
                <div className="d-flex">
                  <Button color="green" size="md">
                    打賞
                  </Button>
                  &nbsp;
                  <Button color="red" size="md">
                    支持
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 border-bottom">
            <Avatar src={AVATAR_LINK.others[1].image} size={52} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold mb-1 ">{AVATAR_LINK.others[1].name}</span>
              <div className="d-flex  align-items-center justify-content-between fs-sm">
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">我有對方籌碼</span>
                <div className="d-flex">
                  <Button color="green" size="md">
                    打賞
                  </Button>
                  &nbsp;
                  <Button color="red" size="md">
                    支持
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center py-3 border-bottom">
            <Avatar src={AVATAR_LINK.others[2].image} size={52} />
            <div className="ms-2 flex-grow-1">
              <span className="fw-bold mb-1 ">{AVATAR_LINK.others[2].name}</span>
              <div className="d-flex  align-items-center justify-content-between fs-sm">
                <span className="me-1 bg-grey-100 rounded p-1 fs-xs">對方有我籌碼</span>
                <div className="d-flex">
                  <Button color="green" size="md">
                    打賞
                  </Button>
                  &nbsp;
                  <Button color="red" size="md">
                    支持
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CoinFriendsClient;
