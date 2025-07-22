import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const KOLs = [
  {
    name: '小茉莉',
    content: '我在送時尚籌碼',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/11.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '時尚')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '阿杰',
    content: '我在送美食籌碼',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/10.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食')?.image || '',
    isReceiveMyCoin: true,
  },
  {
    name: 'Andy老師',
    content: '我在送寵物籌碼',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/12.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '寵物')?.image || '',
    isReceiveMyCoin: false,
  },
];
