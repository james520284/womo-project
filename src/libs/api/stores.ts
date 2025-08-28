import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const Stores = [
  {
    name: '西堤牛排',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store2.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: false,
    productName: '極品牛排套餐85折',
    product: 'http://womo_front.dymain.com/assets/images/user/gallery05.jpg',
    auth: '總管',
    level: 'normal',
  },
  {
    name: '御私藏',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store3.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '飲料控')?.image || '',
    isReceiveMyCoin: false,
    productName: '塔可買一送一',
    product: 'http://womo_front.dymain.com/assets/images/user/gallery07.jpg',
    auth: '行銷',
    level: 'advance',
  },
  {
    name: '星巴克',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/store/store4.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '咖啡控')?.image || '',
    isReceiveMyCoin: true,
    productName: '任意咖啡第二杯半價',
    product: 'http://womo_front.dymain.com/assets/images/store/store_coupon1.jpg',
    auth: '小編',
    level: 'normal',
  },
];
