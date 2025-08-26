import style from './page.module.scss';
import Image from 'next/image';
import LoginOption from './LoginOption';

const Login = () => {
  return (
    <>
      <div className={style.wrapper}>
        {/* LOGO */}
        <div className={style.imgWrapper}>
          <Image
            src="http://womo_front.dymain.com/assets/images/logo.png"
            alt="logo"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>

        {/* SLOGAN */}
        <h1 className="fs-5 fw-bold text-center mt-10 mb-2" style={{ letterSpacing: '4px' }}>
          用AR打卡全世界
        </h1>
        <h2 className="fs-5 fw-bold text-center" style={{ letterSpacing: '4px' }}>
          參與眼前每一個感動
        </h2>

        {/* 登入選擇列表 */}
        <LoginOption />
      </div>
    </>
  );
};

export default Login;
