'use client';
import style from './YellowCoinDepositClient.module.scss';
import PagesHeader from '@/components/header/PagesHeader';
import Avatar from '@/components/ui/avatar/Avatar';
import { COINS } from '@/constants/coin';
import { IconHot } from '@/components/icons';
import { useState } from 'react';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import Link from 'next/link';

const YellowCoinDepositClient = () => {
  const PlanContent = [
    { num: '500', tag: '無增量', price: 'NT$ 50' },
    { num: '5,050', tag: '已含 1 %增量', price: 'NT$ 500', hot: true },
    { num: '2,500', tag: '無增量', price: 'NT$ 250' },
    { num: '10,200', tag: '已含 2 %增量', price: 'NT$ 1000' },
    { num: '21,000', tag: '已含 5 %增量', price: 'NT$ 2000', hot: true },
    { num: '55,000', tag: '已含 10 %增量', price: 'NT$ 5000' },
  ];

  const [tab, setTab] = useState('5,050');
  const targetIndex = PlanContent.findIndex((item) => item.num === tab);

  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="儲值金籌碼" />

      <main className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
        {/* 列表區 */}

        <SectionUI2 title="儲值選擇">
          <div className="mb-10">
            {/* 微賞方案 */}
            <h2 className="fs-sm mb-4">微賞計畫</h2>

            <div className="row g-2">
              {PlanContent.slice(0, 3).map((plan, index) => (
                <div key={index} className="col-4">
                  <button
                    type="button"
                    className={`${style.planTab} ${tab === plan.num ? style.planTabActive : ''}`}
                    onClick={() => setTab(plan.num)}
                  >
                    <div className="d-flex flex-column align-items-center text-center">
                      <span className="fw-bold text-coinYellow">
                        <Avatar src={COINS[2].image} />
                        <span className="my-2">{plan.num}</span>
                      </span>
                      <span className="fs-xs fw-bold text-muted">{plan.tag}</span>
                    </div>
                    {plan.hot && (
                      <span className="position-absolute top-0 start-0">
                        <IconHot color="#da5271" width={28} />
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            {/* 巨賞方案 */}
            <h2 className="fs-sm mb-4">巨賞計畫</h2>
            <div className="row g-2">
              {PlanContent.slice(3).map((plan, index) => (
                <div key={index} className="col-4">
                  <button
                    type="button"
                    className={`${style.planTab} ${tab === plan.num ? style.planTabActive : ''}`}
                    onClick={() => setTab(plan.num)}
                  >
                    <div className="d-flex flex-column align-items-center text-center">
                      <span className="fw-bold text-coinYellow">
                        <Avatar src={COINS[2].image} />
                        <span className="my-2">{plan.num}</span>
                      </span>
                      <span className="fs-xs fw-bold text-muted">{plan.tag}</span>
                    </div>
                    {plan.hot && (
                      <span className="position-absolute top-0 start-0">
                        <IconHot color="#da5271" width={28} />
                      </span>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </SectionUI2>

        {/* 總計區 */}
        <SectionUI2 title="儲值明細">
          <div className="d-flex align-items-center justify-content-between w-75 mx-auto mb-2">
            <h3 className="fs-sm">儲值顆數</h3>
            <span className="text-coinYellow-700 fw-bold">{PlanContent[targetIndex].num} 顆</span>
          </div>
          <div className="d-flex align-items-center justify-content-between w-75 mx-auto">
            <h3 className="fs-sm">支付總額</h3>
            <span className="text-primary fw-bold">{PlanContent[targetIndex].price}</span>
          </div>
        </SectionUI2>

        {/* 個資區 */}
        <SectionUI2 title="個人資訊">
          <div className="w-75 mx-auto mb-10">
            <h3 className="fs-sm ">
              <span className="text-primary">*</span>手機號碼
            </h3>
            <input type="tel" className="fs-6" />
          </div>
          <div className="w-75 mx-auto mb-2">
            <h3 className="fs-sm ">
              <span className="text-primary">*</span>電子信箱
            </h3>
            <input type="email" />
          </div>
        </SectionUI2>

        {/* 說明區 */}
        <section className="mb-10">
          <p className="fs-xs p-5 bg-grey-50 rounded-2">
            為保障消費者權益，您在WOMO以信用卡/金融卡刷卡支付的每筆儲值金額，將存入永豐商業銀行開立之價金保管專戶，專款專用，使用無期限，安全有保障。
            <Link href="#" className="d-block text-decoration-underline text-secondary">
              幫助中心了解更多
            </Link>
          </p>
        </section>

        {/* 送出鍵 */}
        <button type="submit" className={style.submitBtn}>
          確認儲值
        </button>
      </main>
    </>
  );
};

export default YellowCoinDepositClient;
