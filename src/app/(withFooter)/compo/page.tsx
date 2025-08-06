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
    <div className="container mt-5">
      <h1>WOMO元件檢索</h1>
      <hr />
      <h2 className="mb-2">Icon區</h2>
      {iconMap.map((Icon, index) => (
        <Link key={index} href="#" title={Icon.name}>
          <span className="p-3">
            <Icon width={28} />
          </span>
        </Link>
      ))}
      <hr />
      <h2 className="mb-2">按鈕區</h2>
      <Button size="large" color="red">
        大紅
      </Button>{' '}
      &nbsp;
      <Button size="middle" color="red">
        中紅
      </Button>
      &nbsp;
      <Button size="small" color="red">
        小紅
      </Button>
      &nbsp;
    </div>
  );
};

export default Compo;
