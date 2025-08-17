'use client';

import { DatePicker, ConfigProvider, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';
import PagesHeader from '@/components/header/PagesHeader';
import style from './MyProfileEditClient.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import {
  IconGenderMale,
  IconGenderFemale,
  IconFB,
  IconIG,
  IconYT,
  IconAddSolid,
  IconCancel,
} from '@/components/icons';
import Button from '@/components/ui/button/submit/Button';
import { useState, useEffect } from 'react';
import { CITIES } from '@/constants/city';
import MyProfileHobbyTagModal from './MyProfileHobbyTagModal';
import { IconTikTok } from '@/components/icons/SocialMediaIcon';
import AutoResizeTextarea from '@/components/ui/Textarea/Textarea';

const MyProfileEditClient = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [gender, setGender] = useState<'boy' | 'girl'>('girl');
  const onChangeBirthday: DatePickerProps['onChange'] = (_, dateString) => {
    console.log(`選到日期：${dateString}`);
  };
  const { Option } = Select;
  const handleChangeCity = (value: string) => {
    console.log(`選到的縣市：${value}`);
  };

  const [isOpenHobbyTagModal, setIsOpenHobbyTagModal] = useState(false);
  const [showTags, setShowTags] = useState<string[]>([]);

  const socialMedia = [
    <IconFB key="FB" width={28} />,
    <IconIG key="IG" width={28} />,
    <IconYT key="YT" width={28} />,
    <IconTikTok key="TikTok" width={28} />,
  ];

  const handleShowTagsDelete = (tag: string) => {
    setShowTags((prev) => (prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev]));
  };

  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = openDropdown ? 'hidden' : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [openDropdown]);

  return (
    <>
      {/* Header區 */}
      <PagesHeader />

      <div className={`container-fluid mt-10 ${style.wrapper}`}>
        {/* 頭像區 */}
        <section className="d-flex align-items-center">
          <div className="position-relative">
            <Avatar src={AVATAR_LINK.my} size={100} />
            <div className="position-absolute top-100 start-50 translate-middle">
              <Button color="light" size="sm">
                更換
              </Button>
            </div>
          </div>
          <div className="ms-3 d-flex flex-column flex-grow-1">
            <input type="text" defaultValue={'蒼田楓'} className={style.profileName} />
            <input type="text" defaultValue={'mapleLeaf0417'} className={style.profileId} />
            <span className="text-primary fs-xs mt-1">
              你的專屬 ID，只能修改一次，僅限使用字母、數字。
            </span>
          </div>
        </section>

        {/* 性別 */}
        <section className="mt-10">
          <h3 className="fs-6 fw-bold mb-3">性別</h3>
          <button
            type="button"
            className={`border border-2 rounded  me-2 ${
              gender === 'boy'
                ? 'border-secondary text-secondary'
                : 'border-light-subtle text-grey-200'
            }`}
            onClick={() => setGender('boy')}
          >
            <IconGenderMale />
          </button>
          <button
            type="button"
            className={`border border-2 rounded  me-2 ${
              gender === 'girl'
                ? 'border-primary text-primary'
                : 'border-light-subtle text-grey-200'
            }`}
            onClick={() => setGender('girl')}
          >
            <IconGenderFemale />
          </button>
        </section>

        {/* 生日 */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#da5271', // 主色（選中日期、按鈕色）
              colorBgContainer: '#fff', // 輸入框背景色
            },
            components: {
              DatePicker: {
                colorBgElevated: '#fff', // 彈出日曆的背景
                activeBorderColor: '#da5271', // focus 時的邊框
                cellActiveWithRangeBg: '#da5271', // 選中範圍背景色
              },
            },
          }}
        >
          <section className="mt-10">
            <h3 className="fs-6 fw-bold mb-3">生日</h3>
            <DatePicker
              style={{ width: 200 }}
              onChange={onChangeBirthday}
              placeholder="選擇日期"
              format="YYYY-MM-DD"
              disabledDate={(current) => current && current > dayjs().endOf('day')}
            />
          </section>
        </ConfigProvider>

        {/* 地區 */}
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#da5271', // 主色，影響選單選中顏色、邊框
              colorBgContainer: '#fff', // 輸入框背景
            },
            components: {
              Select: {
                optionSelectedBg: '#da5271', // 選中選項的背景色
                optionSelectedColor: '#fff', // 選中選項的字色
              },
            },
          }}
        >
          <section className="mt-10">
            <h3 className="fs-6 fw-bold mb-3">現居地</h3>
            <Select
              placeholder="選擇縣市"
              style={{ width: 200 }}
              onChange={handleChangeCity}
              allowClear
              open={openDropdown}
              onOpenChange={setOpenDropdown}
            >
              {CITIES.map((city) => (
                <Option key={city} value={city}>
                  {city}
                </Option>
              ))}
            </Select>
          </section>
        </ConfigProvider>

        {/* 興趣區 */}
        <section className="mt-10">
          <div className="d-flex align-items-center mb-3">
            <h3 className="fs-6 fw-bold me-1">我感興趣的</h3>
            <button type="button" onClick={() => setIsOpenHobbyTagModal(true)}>
              <IconAddSolid />
            </button>
          </div>
          {showTags.map((tag) => (
            <button
              type="button"
              key={tag}
              className={style.tag}
              onClick={() => handleShowTagsDelete(tag)}
            >
              <span>{tag}</span>
              <span className="ms-1 line-height-none">
                <IconCancel width={16} />
              </span>
            </button>
          ))}
        </section>
        <MyProfileHobbyTagModal
          open={isOpenHobbyTagModal}
          onOpenChange={setIsOpenHobbyTagModal}
          defaultSelectedTags={showTags}
          onSave={setShowTags}
        />

        {/* 關於我 */}
        <section className="mt-10 pb-20">
          <h3 className="fs-6 fw-bold mb-5">關於我</h3>
          <div className=" fs-sm text-dark fw-bold mb-8">
            {socialMedia.map((item, index) => (
              <div key={index} className={style.mediaIcon}>
                {item}
                <input type="text" className="w-75 ms-2" placeholder={`貼上${item.key}連結`} />
              </div>
            ))}
          </div>
          <p className="fs-sm">
            <AutoResizeTextarea />
          </p>
        </section>
      </div>
      {/* 送出鍵 */}
      <button type="button" className={style.submitBtn}>
        修改
      </button>
    </>
  );
};

export default MyProfileEditClient;
