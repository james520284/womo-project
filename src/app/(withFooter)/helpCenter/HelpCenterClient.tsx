'use client';

import * as Accordion from '@radix-ui/react-accordion';
import style from './HelpCenterClient.module.scss';
import { IconArrow } from '@/components/icons';
import PagesHeader from '@/components/header/PagesHeader';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import { FAQ } from '@/constants/faq';

const HelperCenterClient = () => {
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="幫助中心" />

      {/* 內容區 */}

      {FAQ.map((item, index) => (
        <SectionUI2 key={index} title={item.title}>
          <Accordion.Root type="single" collapsible className={style.root}>
            {item.QA.map((qa, index) => (
              <Accordion.Item key={index} value={String(index)} className={style.item}>
                <Accordion.Header className={style.header}>
                  <Accordion.Trigger className={style.trigger}>
                    <span>{qa.Question}</span>
                    <IconArrow className={style.chevron} width={16} />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content forceMount className={`${style.content} ${style.contentInner}`}>
                  {qa.answer}
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </SectionUI2>
      ))}
    </>
  );
};

export default HelperCenterClient;
