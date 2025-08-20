import * as Dialog from '@radix-ui/react-dialog';
import { ReactNode } from 'react';
import styles from './HotEmojiSideSheet.module.scss';
import { IconCancel } from '@/components/icons';

type Side = 'left' | 'right' | 'top' | 'bottom';

type SideSheetProps = {
  side?: Side;
  trigger?: ReactNode;
  /** a11y 標題（可與 titleHidden 一起用） */
  title?: string;
  /** true 時標題不顯示在畫面上（仍提供給螢幕閱讀器） */
  titleHidden?: boolean;
  children: ReactNode;
};

const HotEmojiSideSheet = ({
  side = 'right',
  trigger,
  title,
  titleHidden = false,
  children,
}: SideSheetProps) => {
  const a11yTitle = title ?? 'Sheet';
  const contentAriaLabel = titleHidden ? a11yTitle : undefined;

  return (
    <Dialog.Root>
      {trigger && <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>}

      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} forceMount />

        <Dialog.Content
          className={`${styles.sheet} ${styles[side]}`}
          forceMount
          aria-label={contentAriaLabel}
        >
          {/* 保留 Dialog.Title 以符合 a11y；可選擇隱藏 */}
          <Dialog.Title asChild>
            <span className={titleHidden ? styles.srOnly : styles.title}>{a11yTitle}</span>
          </Dialog.Title>

          <div className={styles.actions}>
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
};

export default HotEmojiSideSheet;
