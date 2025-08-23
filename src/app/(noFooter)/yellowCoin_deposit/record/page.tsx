'use client';

import PagesHeader from '@/components/header/PagesHeader';
import Avatar from '@/components/ui/avatar/Avatar';
import { COINS } from '@/constants/coin';
import Button from '@/components/ui/button/submit/Button';
import { IconSortUp, IconSortDown, IconFilter } from '@/components/icons';
import { useState } from 'react';

const ModalYellowCoinPayDetail = () => {
  const [isSort, setIsSort] = useState(false);
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="儲值紀錄" />

      <div className="container-fluid mt-5" style={{ maxWidth: '700px' }}>
        {/* 功能區 */}
        <div className="text-end">
          <button type="button" className="me-3">
            <IconFilter width={20} />
          </button>
          {isSort ? (
            <button type="button" onClick={() => setIsSort(!isSort)}>
              <IconSortDown />
            </button>
          ) : (
            <button type="button" onClick={() => setIsSort(!isSort)}>
              <IconSortUp />
            </button>
          )}
        </div>

        {/* 列表區 */}
        <ul>
          <li className="py-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <Avatar src={COINS[2].image} />
                <div className="ms-2 d-flex flex-column ">
                  <span className="fw-bold fs-5 text-coinYellow">5,050</span>
                  <div>
                    <span className="fs-xs bg-secondary text-white rounded px-2 py-1">已儲值</span>
                    <span className="fs-xs bg-secondary text-white rounded px-2 py-1 ms-1">
                      支付 NT$ <span>500</span>
                    </span>
                  </div>
                </div>
              </div>
              <Button color="light" size="sm">
                查看
              </Button>
            </div>
            <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
              <span>單號 WM00002</span>
              <span>2025/08/24</span>
            </div>
          </li>
          <li className="py-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <Avatar src={COINS[2].image} />
                <div className="ms-2 d-flex flex-column ">
                  <span className="fw-bold fs-5 text-coinYellow">－600</span>
                  <div>
                    <span className="fs-xs bg-primary text-white rounded px-2 py-1">已退貨</span>
                    <span className="fs-xs bg-primary text-white rounded px-2 py-1 ms-1">
                      退款 NT$ <span>60</span>
                    </span>
                  </div>
                </div>
              </div>
              <Button color="light" size="sm">
                查看
              </Button>
            </div>
            <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
              <span>單號 NG00001</span>
              <span>2025/08/20</span>
            </div>
          </li>
          <li className="py-4">
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="d-flex align-items-center">
                <Avatar src={COINS[2].image} />
                <div className="ms-2 d-flex flex-column ">
                  <span className="fw-bold fs-5 text-coinYellow">1,020</span>
                  <div>
                    <span className="fs-xs bg-secondary text-white rounded px-2 py-1">已儲值</span>
                    <span className="fs-xs bg-secondary text-white rounded px-2 py-1 ms-1">
                      支付 NT$ <span>100</span>
                    </span>
                  </div>
                </div>
              </div>
              <Button color="light" size="sm">
                查看
              </Button>
            </div>
            <div className="text-muted fs-xs p-2 bg-grey-50 rounded d-flex align-items-center justify-content-between">
              <span>單號 WM00001</span>
              <span>2025/08/15</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ModalYellowCoinPayDetail;
