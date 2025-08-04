import { TOPIC_COINS } from '@/libs/api/topicCoins/topicCoins';

export const KOLs = [
  {
    name: '小茉莉',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/11.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '時尚控')?.image || '',
    isReceiveMyCoin: false,
    note: '本週壽星 〉',
  },
  {
    name: '阿杰',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/10.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: true,
    note: '我今天心情不錯 〉',
  },
  {
    name: 'Andy老師',
    content: 'AR空間社群',
    image: 'https://d1q14jmvwk39e0.cloudfront.net/public/assets/images/friend/12.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '寵物控')?.image || '',
    isReceiveMyCoin: false,
    note: '',
  },
  {
    name: '黑皮哥',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/friend/06.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '時尚控')?.image || '',
    isReceiveMyCoin: false,
    note: '要籌碼中 〉',
  },
  {
    name: '壯壯',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/friend/02.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '美食控')?.image || '',
    isReceiveMyCoin: true,
    note: '',
  },
  {
    name: '妳的老公已上線而且名字超級長',
    content: 'AR空間社群',
    image: 'http://womo_front.dymain.com/assets/images/friend/01.jpg',
    coinImg: TOPIC_COINS.find((coin) => coin.name === '寵物控')?.image || '',
    isReceiveMyCoin: false,
    note: '我想要去喝咖啡還有做很多事 〉',
  },
];
