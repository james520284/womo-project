'use client';

import * as Accordion from '@radix-ui/react-accordion';
import style from './Description.module.scss';
import { IconCheckBadge, IconArrow } from '@/components/icons';

const Description = () => {
  return (
    <>
      <Accordion.Root type="single" collapsible className={style.root} defaultValue="item-2">
        <Accordion.Item value="item-1" className={style.item}>
          <Accordion.Header className={style.header}>
            <Accordion.Trigger className={style.trigger}>
              <h2 className="fs-6 fw-bold">商業帳號是什麼？</h2>
              <IconArrow className={style.chevron} width={16} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content forceMount className={`${style.content} ${style.contentInner}`}>
            <h3 className="fs-sm mb-3 lh-lg">
              WOMO專為品牌與創作者設計的專用帳號，提供完整行銷工具與進階功能，協助提升經營效率、拓展影響力。
            </h3>
            <ul className="fs-sm">
              <li className="mb-2">
                <span className="fw-bold text-secondary">多元發幣</span>
                <p>支援智能 Code、手機號碼等多元發送籌碼方式</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">專屬後台</span>
                <p>更多進階模組，全面提升籌碼帳號推廣力</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">分店聯盟</span>
                <p>籌碼跨店通用，最適合連鎖品牌與多據點創作者</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">團隊管理</span>
                <p>可分配不同層級權限，讓多人協作更輕鬆</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">廣告投放</span>
                <p>可在WOMO投放廣告、將優惠曝光到指定帳號的網店</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">業配媒合</span>
                <p>可以發佈合作需求，找到適合的創作者，一起拉高品牌聲量</p>
              </li>
              <li className="mb-2">
                <span className="fw-bold text-secondary">數據分析</span>
                <p>掌握籌碼流通數據，並提供 AI 智能建議，優化經營策略</p>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" className={style.item}>
          <Accordion.Header className={style.header}>
            <Accordion.Trigger className={style.trigger}>
              <div className="d-flex align-items-center mb-3">
                <span className="text-secondary mx-2">
                  <IconCheckBadge width={20} />
                </span>
                <h2 className="fs-6 fw-bold">綠勾勾是什麼？</h2>
              </div>
              <IconArrow className={style.chevron} width={16} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content forceMount className={`${style.content} ${style.contentInner}`}>
            <p className="lh-lg fs-sm">
              WOMO 為已完成<b className="text-secondary mx-2">實名認證</b>且
              <b className="text-secondary mx-2">升級無限方案</b>
              的商業帳號，提供專屬綠勾勾標記。
            </p>
            <p className="lh-lg fs-sm">
              此標記象徵官方認可與信任，協助用戶快速辨識商業身份，提升品牌專業度與可信度。
            </p>
          </Accordion.Content>
        </Accordion.Item>
      </Accordion.Root>
    </>
  );
};

export default Description;
