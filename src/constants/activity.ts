import {
  IconGiveCoin,
  IconWishCandle,
  IconExchangeCoin,
  IconGroupTogether,
  IconLockOutline,
  IconLottery,
  IconCollectCoin,
  IconNull,
} from '@/components/icons';

import { coinGameType } from '@/types/coinGameType';

type ActivityItem = {
  title: string;
  desc: string;
  brief: coinGameType;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

export const ACTIVITY: ActivityItem[] = [
  { title: '贈幣', desc: '送給留言者籌碼', icon: IconGiveCoin, brief: 'give' },
  { title: '許願', desc: '跟所有人許願要籌碼', icon: IconWishCandle, brief: 'wish' },
  { title: '交換', desc: '跟所有人交換籌碼', icon: IconExchangeCoin, brief: 'exchange' },
  {
    title: '湊咖',
    desc: '開團找人玩，所有人拿我的籌碼報名',
    icon: IconGroupTogether,
    brief: 'together',
  },
  {
    title: '秘密',
    desc: '上鎖本貼文，所有人拿我的籌碼解鎖',
    icon: IconLockOutline,
    brief: 'secret',
  },
  { title: '樂透', desc: '提供樂透禮，所有人拿我的籌碼抽獎', icon: IconLottery, brief: 'lottery' },
  {
    title: '集點',
    desc: '提供集點禮，所有人拿我的籌碼換禮',
    icon: IconCollectCoin,
    brief: 'collect',
  },
  { title: '不添加', desc: '提供集點禮，所有人拿我的籌碼換禮', icon: IconNull, brief: 'skip' },
];
