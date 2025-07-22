import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const Stores = [
  {
    name: '西堤牛排',
    content: '門市送美食籌碼',
    image: 'http://womo_front.dymain.com/assets/images/store/store2.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '御私藏',
    content: '門市送飲料籌碼',
    image: 'http://womo_front.dymain.com/assets/images/store/store3.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '飲料')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '星巴克',
    content: '門市送咖啡籌碼',
    image: 'http://womo_front.dymain.com/assets/images/store/store4.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '咖啡')?.image || '',
    isReceiveMyCoin: true,
  },
];
