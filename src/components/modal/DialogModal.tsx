import * as Dialog from '@radix-ui/react-dialog';
import style from './DialogModal.module.scss';
type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DialogModal = ({ open, onOpenChange }: Props) => {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className={style.overlay} />
        <Dialog.Content className={style.modal}>
          <Dialog.Close asChild>
            <button className={style.closeButton} aria-label="關閉">
              ✕
            </button>
          </Dialog.Close>
          <Dialog.Title>標題</Dialog.Title>
          <Dialog.Description>內容</Dialog.Description>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DialogModal;
