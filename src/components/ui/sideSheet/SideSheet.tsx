'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import styles from './SideSheet.module.scss';
import { IconShare, IconMore, IconCancel, IconEditOutline } from '@/components/icons';
import Link from 'next/link';

type Side = 'left' | 'right' | 'top' | 'bottom';

type SideSheetProps = {
  side?: Side;
  trigger?: ReactNode;
  /** a11y 標題（可與 titleHidden 一起用） */
  title?: string;
  /** true 時標題不顯示在畫面上（仍提供給螢幕閱讀器） */
  titleHidden?: boolean;
  children: ReactNode;
  vh?: number;
  shareIcon?: boolean;
  moreIcon?: boolean;
  editIcon?: boolean;
  editLink?: string;
};

type CSSVariables = React.CSSProperties & {
  '--vh'?: string;
};

export function SideSheet({
  side = 'right',
  trigger,
  title,
  titleHidden = false,
  children,
  vh = 60,
  shareIcon = false,
  moreIcon = false,
  editIcon = false,
  editLink,
}: SideSheetProps) {
  const a11yTitle = title ?? 'Sheet';
  const contentAriaLabel = titleHidden ? a11yTitle : undefined;
  const sheetStyle: CSSVariables = {
    ['--vh']: `${vh}vh`, // 不會報錯
  };

  return (
    <Dialog.Root>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} forceMount />

        <Dialog.Content
          className={`${styles.sheet} ${styles[side]}`}
          forceMount
          aria-label={contentAriaLabel}
          style={sheetStyle}
        >
          {/* 保留 Dialog.Title 以符合 a11y；可選擇隱藏 */}
          <Dialog.Title asChild>
            <span className={titleHidden ? styles.srOnly : styles.title}>{a11yTitle}</span>
          </Dialog.Title>

          {/* 把 close/share/more 放在同一個容器 */}
          <div className={styles.actions}>
            {editIcon && (
              <Link href={`${editLink}`} className={styles.iconBtn} aria-label="Edit">
                <IconEditOutline width={20} />
              </Link>
            )}
            {shareIcon && (
              <button className={styles.iconBtn} aria-label="Share">
                <IconShare width={20} />
              </button>
            )}
            {moreIcon && (
              <button className={styles.iconBtn} aria-label="More">
                <IconMore />
              </button>
            )}

            <Dialog.Close asChild>
              <button className={styles.iconBtn} aria-label="Close">
                <IconCancel width={28} />
              </button>
            </Dialog.Close>
          </div>

          <div className={styles.body}>{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
