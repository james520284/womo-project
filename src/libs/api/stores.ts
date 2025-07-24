import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const Stores = [
  {
    name: '西堤牛排',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store2.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '御私藏',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store3.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '飲料控')?.image || '',
    isReceiveMyCoin: false,
  },
  {
    name: '星巴克',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store4.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '咖啡控')?.image || '',
    isReceiveMyCoin: true,
  },
];
