'use client';

import {
  AddIcon,
  AddPostIcon,
  AiFaceIcon,
  AnalyzeIcon,
  ARIcon,
  ArrowIcon,
  ArrowSolidIcon,
  BellIcon,
  BackArrowIcon,
  CancelIcon,
  ChatIcon,
  ChatFriendIcon,
  CheckIcon,
  CloakIcon,
  CoinEmojiIcon,
  CompassIcon,
  DeleteIcon,
  ExchangeIcon,
  FilterIcon,
  FullscreenIcon,
  GiftIcon,
  GiveCoinIcon,
  GridViewIcon,
  IncomeIcon,
  ListViewIcon,
  LocationIcon,
  LockIcon,
  MemberIcon,
  MenuIcon,
  MicrophoneIcon,
  MoodIcon,
  MoreIcon,
  PhotoIcon,
  ScanIcon,
  SearchIcon,
  SellIcon,
  SendIcon,
  SettingIcon,
  ShareIcon,
  ShieldIcon,
  ShowIcon,
  SortDownIcon,
  SortUpIcon,
  StickyIcon,
  StoreIcon,
  VideoIcon,
  ViewIcon,
  ViewSolidIcon,
  WalletIcon,
  YoutubeIcon,
  AddFriendIcon,
} from '@/components/icons/AllIcon';
import Link from 'next/link';
import Button from '@/components/ui/button/submit/Button';
import ButtonOutline from '@/components/ui/button/submit/ButtonOutline';
import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import Coin from '@/components/ui/coin/Coin';
import DoubleCoins from '@/components/ui/coin/DoubleCoins';
import SectionUI from '@/components/ui/section/SectionUI';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import { useState } from 'react';
import { Tab, TabDataOnClick } from '@/components/ui/tab/Tab';

const iconMap = [
  AddIcon,
  AddPostIcon,
  AiFaceIcon,
  AnalyzeIcon,
  ARIcon,
  ArrowIcon,
  ArrowSolidIcon,
  BellIcon,
  BackArrowIcon,
  CancelIcon,
  ChatIcon,
  ChatFriendIcon,
  CheckIcon,
  CloakIcon,
  CoinEmojiIcon,
  CompassIcon,
  DeleteIcon,
  ExchangeIcon,
  FilterIcon,
  FullscreenIcon,
  GiftIcon,
  GiveCoinIcon,
  GridViewIcon,
  IncomeIcon,
  ListViewIcon,
  LocationIcon,
  LockIcon,
  MemberIcon,
  MenuIcon,
  MicrophoneIcon,
  MoodIcon,
  MoreIcon,
  PhotoIcon,
  ScanIcon,
  SearchIcon,
  SellIcon,
  SendIcon,
  SettingIcon,
  ShareIcon,
  ShieldIcon,
  ShowIcon,
  SortDownIcon,
  SortUpIcon,
  StickyIcon,
  StoreIcon,
  VideoIcon,
  ViewIcon,
  ViewSolidIcon,
  WalletIcon,
  YoutubeIcon,
  AddFriendIcon,
];

const Compo = () => {
  const [tab, setTab] = useState('標籤1');
  return (
    <div className="container my-5 mb-20">
      <h1 className="fw-bold">WOMO元件檢索</h1>
      <hr />
      <h2 className="mb-2 fw-bold">頭像區</h2>
      <div className="d-flex align-items-center">
        <Avatar src={AVATAR_LINK.my} />
        &nbsp;
        <Coin color="green" scale={0.6}>
          <Avatar src={AVATAR_LINK.my} />
        </Coin>
        &nbsp;
        <Coin color="red" scale={0.6}>
          <Avatar src={AVATAR_LINK.my} />
        </Coin>
        &nbsp; &nbsp;
        <DoubleCoins scale={0.6}>
          <Avatar src={AVATAR_LINK.my} />
        </DoubleCoins>
      </div>
      <br />
      <hr />
      <h2 className="mb-2 fw-bold">Icon區</h2>
      {iconMap.map((Icon, index) => (
        <Link key={index} href="#" title={Icon.name}>
          <span className="p-3">
            <Icon width={28} />
          </span>
        </Link>
      ))}
      <br />
      <hr />

      <h2 className="mb-2 fw-bold">按鈕區</h2>
      <div className="row g-5">
        <div className="col-6">
          <Button size="lg" color="red">
            大紅
          </Button>{' '}
          &nbsp;
          <Button size="md" color="red">
            中紅
          </Button>
          &nbsp;
          <Button size="sm" color="red">
            小紅
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="green">
            大綠
          </Button>{' '}
          &nbsp;
          <Button size="md" color="green">
            中綠
          </Button>
          &nbsp;
          <Button size="sm" color="green">
            小綠
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="orange">
            大橘
          </Button>{' '}
          &nbsp;
          <Button size="md" color="orange">
            中橘
          </Button>
          &nbsp;
          <Button size="sm" color="orange">
            小橘
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="brand">
            大彩
          </Button>{' '}
          &nbsp;
          <Button size="md" color="brand">
            中彩
          </Button>
          &nbsp;
          <Button size="sm" color="brand">
            小彩
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="dark">
            大黑
          </Button>{' '}
          &nbsp;
          <Button size="md" color="dark">
            中黑
          </Button>
          &nbsp;
          <Button size="sm" color="dark">
            小黑
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="light">
            大白
          </Button>{' '}
          &nbsp;
          <Button size="md" color="light">
            中白
          </Button>
          &nbsp;
          <Button size="sm" color="light">
            小白
          </Button>
        </div>
        <div className="col-6">
          <Button size="lg" color="noUse">
            停用
          </Button>
          &nbsp;
          <Button size="md" color="noUse">
            停用
          </Button>
          &nbsp;
          <Button size="sm" color="noUse">
            停用
          </Button>
        </div>
        <div className="col-6">
          <ButtonOutline size="lg" color="red">
            大紅
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="md" color="red">
            中紅
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="sm" color="red">
            小紅
          </ButtonOutline>
        </div>
        <div className="col-6">
          <ButtonOutline size="lg" color="green">
            大綠
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="md" color="green">
            中綠
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="sm" color="green">
            小綠
          </ButtonOutline>
        </div>
        <div className="col-6">
          <ButtonOutline size="lg" color="orange">
            大橘
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="md" color="orange">
            中橘
          </ButtonOutline>
          &nbsp;
          <ButtonOutline size="sm" color="orange">
            小橘
          </ButtonOutline>
        </div>
      </div>
      <br />
      <hr />

      <h2 className="mb-2 fw-bold">工具區</h2>
      <div>
        <span>無數據型Tab</span>
        <br />
        <Tab isActive={tab === '標籤1'} onClick={() => setTab('標籤1')}>
          Tab頁籤1
        </Tab>
        <Tab isActive={tab === '標籤2'} onClick={() => setTab('標籤2')}>
          Tab頁籤2
        </Tab>
        <Tab isActive={tab === '標籤3'} onClick={() => setTab('標籤3')}>
          Tab頁籤3
        </Tab>
      </div>
      <br />
      <div>
        <span>有數據型Tab</span>
        <br />
        <Tab isActive={tab === '標籤1'} onClick={() => setTab('標籤1')} isShowData={true} num={25}>
          Tab頁籤1
        </Tab>
        <Tab
          isActive={tab === '標籤2'}
          onClick={() => setTab('標籤2')}
          isShowData={true}
          num={112}
          unit={'人'}
        >
          Tab頁籤2
        </Tab>
        <Tab
          isActive={tab === '標籤3'}
          onClick={() => setTab('標籤3')}
          isShowData={true}
          num={44}
          unit={'次'}
        >
          Tab頁籤3
        </Tab>
      </div>
      <br />
      <div>
        <span>點擊才顯示數據型Tab</span>
        <br />
        <TabDataOnClick isActive={tab === '標籤1'} onClick={() => setTab('標籤1')} num={25}>
          Tab頁籤1
        </TabDataOnClick>
        <TabDataOnClick
          isActive={tab === '標籤2'}
          onClick={() => setTab('標籤2')}
          num={112}
          unit={'人'}
        >
          Tab頁籤2
        </TabDataOnClick>
        <TabDataOnClick
          isActive={tab === '標籤3'}
          onClick={() => setTab('標籤3')}
          num={44}
          unit={'次'}
        >
          Tab頁籤3
        </TabDataOnClick>
      </div>
      <br />
      <SectionUI>無標題版外框區塊</SectionUI>
      <SectionUI2 title="有標題版外框區塊">這是內文</SectionUI2>
      <br />
      <hr />

      <h2 className="mb-2 fw-bold">文字區</h2>
      <p className="fs-sm text-muted">基本準則：字體最大不能高於20px，最小不能低於12px</p>
      <br />
      <h1 className="fs-5 fw-bold">主標題</h1>
      <span className="fs-sm">
        (20px加粗，例如：頁面主標，標籤：＜h1＞，className：.fs-5 + .fw-bold)
      </span>
      <br />
      <br />
      <h2 className="fs-6 fw-bold">副標題</h2>
      <span className="fs-sm">
        (16px加粗，例如：用戶名稱，標籤：＜h2＞，className：.fs-6 + .fw-bold)
      </span>
      <br />
      <br />
      <h3 className="fs-6">小標題</h3>
      <span className="fs-sm">
        (16px，例如：小功能按鈕文案，或tab頁籤文案，標籤：＜button＞、＜a＞、＜h3＞，className：網頁預設16px)
      </span>
      <br />
      <br />
      <p className="fs-sm">內文</p>
      <span className="fs-sm">
        (14px，例如貼文內容、或很多字的描述說明，標籤：＜p＞，className：.fs-sm)
      </span>
      <br />
      <br />
      <div className="fs-xs">附註</div>
      <span className="fs-sm">(12px，例如時間標記，標籤：＜span＞，className：.fs-xs)</span>
    </div>
  );
};

export default Compo;
