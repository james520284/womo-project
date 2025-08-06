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
];

const Compo = () => {
  return (
    <div className="container mt-5 mb-20">
      <h1 className="fw-bold">WOMO元件檢索</h1>
      <hr />
      <h2 className="mb-2 fw-bold">Icon區</h2>
      {iconMap.map((Icon, index) => (
        <Link key={index} href="#" title={Icon.name}>
          <span className="p-3">
            <Icon width={28} />
          </span>
        </Link>
      ))}
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
      <hr />
      <h2 className="mb-2 fw-bold">工具區</h2>
      <SectionUI>無標題版外框區塊</SectionUI>
      <SectionUI2 title="這是標題">這是內文</SectionUI2>
    </div>
  );
};

export default Compo;
