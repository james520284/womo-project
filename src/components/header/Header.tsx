import style from './Header.module.scss';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className={style['headerContainer']}>
      <div className="container-fluid">
        <div className={style['headerContent']}>
          <a href="#" className="d-flex align-items-center">
            <Image
              src="/images/WOMO-LOGO1.png"
              alt="LOGO"
              width={120}
              height={0}
              style={{ height: 'auto' }}
            />
          </a>
          <ul className={`d-flex ${style['headerNavMain']}`}>
            <li>
              <a href="#">籌碼聚點</a>
            </li>
            <li>
              <a href="#">籌碼包</a>
            </li>
            <li>
              <a href="#">瘋碼秀</a>
            </li>
            <li>
              <a href="#">找禮物</a>
            </li>
            <li>
              <a href="#">籌碼收入</a>
            </li>
          </ul>
          <ul className={`d-flex ${style['headerNavUtility']}`}>
            <li>
              <a href="#">新增</a>
            </li>
            <li>
              <a href="#">碼友</a>
            </li>
            <li>
              <a href="#">搜尋</a>
            </li>
            <li>
              <a href="#">小鈴鐺</a>
            </li>
            <li>
              <a href="#">個人選單</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
