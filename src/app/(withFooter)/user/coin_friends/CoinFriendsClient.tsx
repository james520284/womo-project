'use client';

import style from './CoinFriendsClient.module.scss';
import CoinFriendsHeader from '@/components/header/CoinFriendsHeader';
import Header from '@/components/header/Header';
import useScreenSize from '@/hooks/useScreenSize';
import { useState } from 'react';
import Button from '@/components/ui/button/submit/Button';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { FilterIcon, CancelIcon } from '@/components/icons/AllIcon';
import Search from '@/components/ui/search/Search';
import { Tab, TabDataOnClick } from '@/components/ui/tab/Tab';

const CoinFriendsClient = () => {
  const { isMobile, isTablet } = useScreenSize();
  const [tab, setTab] = useState<'all' | 'iHave' | 'youHave'>('all');
  const [isFilter, setIsFilter] = useState(false);
  const [coin, setCoin] = useState<'all' | 'green' | 'red'>('all');
  return (
    <>
      {/* Header區 */}
      {isMobile || isTablet ? <CoinFriendsHeader /> : <Header />}

      <div className={`container-fluid ${style.wrapper}`}>
        {/* 頁籤區 */}
        <section className="mt-8">
          <div className="mb-5 d-flex align-items-center">
            <TabDataOnClick
              isActive={tab === 'all'}
              onClick={() => setTab('all')}
              num={777}
              unit="人"
            >
              全部
            </TabDataOnClick>
            <TabDataOnClick
              isActive={tab === 'iHave'}
              onClick={() => setTab('iHave')}
              num={257}
              unit="人"
            >
              我有對方籌碼
            </TabDataOnClick>
            <TabDataOnClick
              isActive={tab === 'youHave'}
              onClick={() => setTab('youHave')}
              num={520}
              unit="人"
            >
              對方有我籌碼
            </TabDataOnClick>
          </div>
        </section>

        {/* 功能按鈕區 */}
        <div
          className={`mb-5 d-flex  ${
            !isFilter ? 'justify-content-end' : 'justify-content-between'
          }`}
        >
          {isFilter && (
            <div className="d-flex align-items-center">
              <Tab isActive={coin === 'all'} onClick={() => setCoin('all')}>
                全部
              </Tab>

              <Tab isActive={coin === 'green'} onClick={() => setCoin('green')}>
                綠籌碼
              </Tab>
              <Tab isActive={coin === 'red'} onClick={() => setCoin('red')}>
                紅籌碼
              </Tab>
              <button
                type="button"
                onClick={() => {
                  setIsFilter(false);
                  setCoin('all');
                }}
              >
                <CancelIcon />
              </button>
            </div>
          )}
          <div className="d-flex align-items-center">
            {!isFilter && (
              <div className="me-2">
                <Search isActive={true} />
              </div>
            )}
            {tab !== 'all' && (
              <button type="button" onClick={() => setIsFilter(true)}>
                <FilterIcon width={20} />
              </button>
            )}
          </div>
        </div>

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
