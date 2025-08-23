import style from './MoreFunctionPage.module.scss';
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
  IconLogout,
  IconNote,
  IconHelpOutline,
  IconGlobalOutline,
} from '@/components/icons';
import Link from 'next/link';

const MoreFunctionPage = () => {
  return (
    <ul className={style.listGroup}>
      <li className="d-flex align-items-center mb-8">
        <Avatar src={AVATAR_LINK.my} size={48} />
        <div className="ms-2">
          <h2 className="fw-bold fs-6">蒼田楓</h2>
          <div className="text-grey-400">
            <IconEditOutline width={16} />
            <span>我的小檔案</span>
          </div>
        </div>
      </li>
      <li>
        <Link href="user/coin_friends">
          <IconFriends width={16} />
          <span>我的籌碼朋友</span>
        </Link>
      </li>
      <li>
        <IconChat width={16} />
        <span>我的私聊房</span>
      </li>
      <li>
        <IconGiftSolid width={16} />
        <span>我的禮物券</span>
      </li>
      <hr />
      <li>
        <IconQRcode width={16} />
        <span>我的主頁QR碼</span>
      </li>
      <li>
        <IconQRcode width={16} />
        <span>我的籌碼發行QR碼</span>
      </li>
      <li>
        <IconQRcode width={16} />
        <span>我的打賞箱QR碼</span>
      </li>
      <hr />

      <li>
        <IconCoinEmoji width={16} />
        <span>我的訂閱</span>
      </li>
      <li>
        <IconIncome width={16} />
        <span>我的收益</span>
      </li>
      <hr />
      <li>
        <IconCheckBadge width={16} color="#00b0b4" />
        <span>綠勾勾商業帳號</span>
      </li>
      <li>
        <IconCheckBadge width={16} color="#d3745d" />
        <span>紅勾勾實名認證</span>
      </li>
      <li>
        <IconCheckBadge width={16} color="#e3bc41" />
        <span>金勾勾榮耀標章</span>
      </li>
      <hr />
      <li>
        <Link href="/yellowCoin_deposit/record">
          <IconNote width={16} />
          <span>儲值紀錄</span>
        </Link>
      </li>
      <li>
        <Link href="/helpCenter">
          <IconHelpOutline width={16} />
          <span>幫助中心</span>
        </Link>
      </li>
      <li>
        <Link href="/user/myAccount">
          <IconSetting width={16} />
          <span>帳號設定</span>
        </Link>
      </li>
      <li>
        <IconGlobalOutline width={16} />
        <span>關於WOMO</span>
      </li>
      <hr />
      <li>
        <IconLogout width={16} />
        <span>登出</span>
      </li>
    </ul>
  );
};

export default MoreFunctionPage;
