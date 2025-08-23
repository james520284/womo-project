import Avatar from '@/components/ui/avatar/Avatar';
import { AVATAR_LINK } from '@/libs/api/avatar/avatar';
import {
  IconEditOutline,
  IconFriends,
  IconChat,
  IconGiftSolid,
  IconQRcode,
  IconIncome,
  IconCoinEmoji,
  IconCheckBadge,
  IconSetting,
  IconExclamationMarkCircle,
  IconLogout,
  IconNote,
  IconHelpOutline,
} from '@/components/icons';
import Link from 'next/link';

const MoreFunctionPage = () => {
  return (
    <>
      <ul className="mt-5 mb-20">
        <li className="d-flex align-items-center mb-8">
          <Avatar src={AVATAR_LINK.my} size={48} />
          <div className="ms-2">
            <h2 className="fw-bold fs-6">蒼田楓</h2>
            <div className="text-grey-400">
              <IconEditOutline width={16} />
              <span className="fw-bold fs-sm ms-1">我的小檔案</span>
            </div>
          </div>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconFriends width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的籌碼朋友</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconChat width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的私聊房</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconGiftSolid width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的禮物券</h2>
        </li>
        <hr />
        <li className="d-flex align-items-center  mb-5">
          <IconQRcode width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的主頁QR碼</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconQRcode width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的籌碼發行QR碼</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconQRcode width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的打賞箱QR碼</h2>
        </li>
        <hr />

        <li className="d-flex align-items-center  mb-5">
          <IconCoinEmoji width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的訂閱</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconIncome width={16} />
          <h2 className="fw-bold fs-sm ms-1">我的收益</h2>
        </li>
        <hr />
        <li className="d-flex align-items-center  mb-5">
          <IconCheckBadge width={16} color="#00b0b4" />
          <h2 className="fw-bold fs-sm ms-1">綠勾勾商業帳號</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconCheckBadge width={16} color="#d3745d" />
          <h2 className="fw-bold fs-sm ms-1">紅勾勾實名認證</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconCheckBadge width={16} color="#e3bc41" />
          <h2 className="fw-bold fs-sm ms-1">金勾勾榮耀標章</h2>
        </li>
        <hr />
        <li className="d-flex align-items-center  mb-5">
          <IconNote width={16} />
          <h2 className="fw-bold fs-sm ms-1">儲值紀錄</h2>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconHelpOutline width={16} />
          <h2 className="fw-bold fs-sm ms-1">幫助中心</h2>
        </li>
        <li>
          <Link href="/user/myAccount" className="d-flex align-items-center  mb-5">
            <IconSetting width={16} />
            <h2 className="fw-bold fs-sm ms-1">帳號設定</h2>
          </Link>
        </li>
        <li className="d-flex align-items-center  mb-5">
          <IconExclamationMarkCircle width={16} />
          <h2 className="fw-bold fs-sm ms-1">關於WOMO</h2>
        </li>
        <hr />
        <li className="d-flex align-items-center">
          <IconLogout width={16} />
          <h2 className="fw-bold fs-sm ms-1">登出</h2>
        </li>
      </ul>
    </>
  );
};

export default MoreFunctionPage;
