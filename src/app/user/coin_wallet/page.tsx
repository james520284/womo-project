import style from './page.module.scss';
import { COINS } from '@/constants/coin';
import Image from 'next/image';
import Header from '@/components/header/Header';

const CoinWallet = () => {
  return (
    <>
      <Header />
      <div className={style.wrapper}>
        <div className="d-flex justify-content-around mb-20 mt-5">
          <button type="button" className={style.coinActionBtn}>
            <Image
              src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_give.svg?v=2"
              alt="送禮"
              width={32}
              height={32}
            />
            <span className="ms-1">送禮</span>
          </button>
          <button type="button" className={style.coinActionBtn}>
            <Image
              src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_receive.svg"
              alt="送禮"
              width={32}
              height={32}
            />
            <span className="ms-1">收禮</span>
          </button>
          <button type="button" className={style.coinActionBtn}>
            <Image
              src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/quick_btn_get.svg?v=2"
              alt="送禮"
              width={32}
              height={32}
            />
            <span className="ms-1">回謝</span>
          </button>
        </div>
        <div className={`${style.walletHeader}`}>
          {COINS.map((coin) => (
            <div
              key={coin.name}
              className="d-flex flex-column align-items-center text-center flex-grow-1 mx-2"
            >
              <Image src={coin.image} alt={coin.name} width={48} height={48} />
              <span
                className={`h3 mt-3 ${
                  coin.name === '綠籌碼'
                    ? 'text-coinGreen'
                    : coin.name === '紅籌碼'
                    ? 'text-coinRed'
                    : 'text-coinYellow'
                }`}
              >
                {coin.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CoinWallet;
