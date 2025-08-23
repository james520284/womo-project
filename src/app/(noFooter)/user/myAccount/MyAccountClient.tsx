'use client';

import PagesHeader from '@/components/header/PagesHeader';
import Image from 'next/image';
import Button from '@/components/ui/button/submit/Button';
import SectionUI2 from '@/components/ui/section/SectionUI2';
import { IconCheckDouble } from '@/components/icons';
import Link from 'next/link';
import style from './MyAccountClient.module.scss';

const MyAccountClient = () => {
  return (
    <>
      {/* Header區 */}
      <PagesHeader titleType="txt" titleTxt="帳號設定" />

      <div className="container-fluid mt-5 mb-10" style={{ maxWidth: '700px' }}>
        {/* 登入綁定 */}
        <SectionUI2 title="登入綁定">
          {/* Line */}
          <div className="d-flex justify-content-between align-items-center py-5 border-bottom">
            <div className="d-flex  align-items-start">
              <Image
                src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/icon_social_line.svg"
                alt="fb"
                width={48}
                height={48}
              />
              <div className="ms-3">
                <div className="d-flex flex-column align-items-start">
                  <span className="fw-bold">Line帳號登入</span>
                  <span className="bg-secondary text-white rounded p-1 fs-xs">已綁定</span>
                </div>
              </div>
            </div>
            <div>
              <IconCheckDouble width={28} color="#00b0b4" />
            </div>
          </div>

          {/* Gmail */}
          <div className="d-flex justify-content-between align-items-center py-5 border-bottom">
            <div className="d-flex  align-items-start">
              <Image
                src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/icon_social_google.svg"
                alt="fb"
                width={48}
                height={48}
              />
              <div className="ms-3">
                <div className="d-flex flex-column align-items-start">
                  <span className="fw-bold">Gmail帳號登入</span>
                  <span className="bg-primary text-white rounded p-1 fs-xs">尚未綁定</span>
                </div>
              </div>
            </div>
            <div>
              <Button color="light" size="sm">
                綁定
              </Button>
            </div>
          </div>

          {/* Fb */}
          <div className="d-flex justify-content-between align-items-center py-5 ">
            <div className="d-flex  align-items-start">
              <Image
                src="https://womophoto.s3.ap-northeast-1.amazonaws.com/public/assets/images/icon/icon_social_facebook.svg"
                alt="fb"
                width={48}
                height={48}
              />
              <div className="ms-3">
                <div className="d-flex flex-column align-items-start">
                  <span className="fw-bold">Facebook帳號登入</span>
                  <span className="bg-primary text-white rounded p-1 fs-xs">尚未綁定</span>
                </div>
              </div>
            </div>
            <div>
              <Button color="light" size="sm">
                綁定
              </Button>
            </div>
          </div>
        </SectionUI2>

        {/* 安全驗證 */}
        <SectionUI2 title="安全驗證">
          <div className="mb-10">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-sm ">手機號碼</h3>
              <IconCheckDouble width={28} color="#00b0b4" />
            </div>
            <input type="tel" className="fs-sm text-muted" defaultValue="0912345678" />
          </div>
          <div className="mb-2">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-sm ">電子信箱</h3>
              <Button color="light" size="sm">
                發送驗證信
              </Button>
            </div>
            <input type="email" className="fs-sm text-muted" placeholder="example@mail.com" />
          </div>
        </SectionUI2>

        {/* 修改密碼 */}
        <SectionUI2 title="修改密碼">
          <div className="mb-10">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-sm ">舊密碼</h3>
              <IconCheckDouble width={28} color="#00b0b4" />
            </div>
            <input type="password" className="fs-sm text-muted" defaultValue="123456" />
          </div>
          <div className="mb-10">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-sm ">新密碼</h3>
              <span className="fs-xs">
                密碼強度：<span className="text-primary fw-bold">低</span>
              </span>
            </div>
            <input type="password" className="fs-sm text-muted" defaultValue="123456789" />
          </div>
          <div className="mb-10">
            <div className="d-flex align-items-center justify-content-between">
              <h3 className="fs-sm ">確認新密碼</h3>
              <IconCheckDouble width={28} color="#00b0b4" />
            </div>
            <input type="password" className="fs-sm text-muted" defaultValue="123456789" />
          </div>
          <div className="text-center fs-xs text-muted">
            <Link href="#">忘記舊密碼？</Link>
          </div>
        </SectionUI2>
      </div>

      {/* 送出鍵 */}
      <button type="submit" className={style.submitBtn}>
        確認修改
      </button>
    </>
  );
};

export default MyAccountClient;
