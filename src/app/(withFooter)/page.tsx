// [本頁目的]：前台首頁

import Header from '@/components/header/Header';
import FriendsNewPost from '@/components/home/FriendsNewPost';
import PostPublisher from '@/components/home/PostPublisher';
import CoinFriendsPreview from '@/components/home/CoinFriendsPreview';
import CoinShow from '@/components/home/CoinShow';
import { Suspense } from 'react';

export default function Home() {
  return (
    <>
      <Header />

      {/* 最新貼文 CSR模式*/}
      <FriendsNewPost />

      {/* 個人發佈貼文 CSR模式*/}
      <PostPublisher />

      {/* 誰擁有我的籌碼 CSR模式 */}
      <CoinFriendsPreview />

      {/* 熱門探索 CSR模式 */}
      <Suspense>
        <CoinShow />
      </Suspense>
    </>
  );
}
