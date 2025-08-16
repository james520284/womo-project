'use client';

import { DatePicker, ConfigProvider, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import dayjs from 'dayjs';

import style from './ProfileEdit.module.scss';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import { IconGenderMale, IconGenderFemale, IconFB, IconIG, IconYT } from '@/components/icons';
import Link from 'next/link';
import Button from '@/components/ui/button/submit/Button';
import { useState } from 'react';
import { CITIES } from '@/constants/city';

type Props = {
  setIsEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProfileEdit = ({ setIsEditable }: Props) => {
  const [gender, setGender] = useState<'boy' | 'girl'>('girl');
  const onChangeBirthday: DatePickerProps['onChange'] = (_, dateString) => {
    alert(`選到日期：${dateString}`);
  };
  const { Option } = Select;
  const handleChangeCity = (value: string) => {
    alert(`選到的縣市：${value}`);
  };
  const handleChangeHobby = (value: string | string[]) => {
    console.log(`selected ${value}`);
  };

  const socialMedia = [
    <IconFB key="FB" width={34} />,
    <IconIG key="IG" width={42} />,
    <IconYT key="YT" width={36} />,
  ];
  return (
    <div className={`container-fluid mt-10   ${style.wrapper}`}>
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
            gender === 'girl' ? 'border-primary text-primary' : 'border-light-subtle text-grey-200'
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
              colorBorder: '#da5271', // 邊框顏色
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
      <ConfigProvider
        theme={{
          // 全域主題色
          token: {
            colorPrimary: '#da5271', // 主色：選中、高亮
            colorBgContainer: '#da5271', // 選擇器輸入框底色
            colorBorder: '#da5271', // 邊框顏色（含 hover/focus）
            controlOutline: 'rgba(218, 82, 113,0.25)', // focus 外圈
          },
          // 只針對 Select 客製
          components: {
            Select: {
              selectorBg: '#fff', // 輸入框背景
              optionSelectedBg: '#d9dbe1', // 下拉選單被選中背景
              optionSelectedColor: '#000', // 下拉選單被選中文字
              optionActiveBg: '#d9dbe1', // hover 選項背景
              multipleItemBg: '#d9dbe1', // 多選 tag 背景
              multipleItemBorderColor: '#d9dbe1',
            },
          },
        }}
      >
        <section className="mt-10">
          <h3 className="fs-6 fw-bold mb-3">我感興趣的</h3>
          <Select
            prefix="美食"
            mode="multiple"
            style={{ width: '100%' }}
            onChange={handleChangeHobby}
            options={[
              { value: 'jack', label: '日韓' },
              { value: 'lucy', label: 'Lucy' },
              { value: 'tom', label: 'Tom' },
            ]}
          />
        </section>
      </ConfigProvider>
      {/* 關於我 */}
      <section className="mt-10">
        <h3 className="fs-6 fw-bold mb-3">關於我</h3>
        <div className="d-flex align-items-center fs-sm text-dark fw-bold mb-2">
          {socialMedia.map((item, index) => (
            <Link href="#" key={index} className={style.mediaIcon}>
              {item}
            </Link>
          ))}
        </div>
        <p className="fs-sm">m</p>
      </section>

      {/* 送出鍵 */}
      <button type="submit" className={style.submitBtn} onClick={() => setIsEditable(false)}>
        修改
      </button>
    </div>
  );
};

export default ProfileEdit;
