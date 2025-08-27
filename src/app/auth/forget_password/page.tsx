import style from './page.module.scss';
import PagesHeader from '@/components/header/PagesHeader';
import { IconPhone, IconMail } from '@/components/icons';
import Button from '@/components/ui/button/submit/Button';
import Link from 'next/link';

const ForgetPassword = () => {
  return (
    <div className={style.wrapper}>
      {/* Header區 */}
      <PagesHeader
        titleType="img"
        imageSrc="/images/WOMO-LOGO1.png"
        imageLink="/"
        backArrowBtn={false}
      />

      {/* 輸入區 */}
      <div className="w-75 mx-auto">
        <h1 className="fs-4 fw-bold mt-20 mb-5">忘記密碼？</h1>
        <p className="fs-sm mb-20 lh-lg">
          擇一輸入您註冊時的「手機號碼」或「Email」
          <br />
          新密碼將寄送至您的簡訊或信箱
        </p>

        <div className="d-flex align-items-center mb-5 position-relative">
          <IconPhone width={20} />
          <input type="tel" placeholder="手機號碼" className="fs-6 ms-2" />
        </div>
        <div className="d-flex align-items-center mb-5 position-relative">
          <IconMail width={20} />
          <input type="tel" placeholder="Email信箱" className="fs-6 ms-2" />
        </div>

        <Button width="expand">送出</Button>

        <Link
          href="/auth/login"
          className="fs-xs text-muted text-decoration-underline d-inline-block mt-5"
        >
          返回登入
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
