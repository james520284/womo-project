'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

type DropDownMenuProps = {
  trigger: React.ReactElement;
  onEdit?: () => void;
  onShare?: () => void;
  onDelete?: () => void;
  onReport?: () => void;
};

const DropDownMenu = ({ trigger, onEdit, onShare, onDelete, onReport }: DropDownMenuProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>{trigger}</DropdownMenu.Trigger>

      <DropdownMenu.Content className="rounded border bg-white p-1 mt-2 me-3 shadow">
        <DropdownMenu.Item
          className="px-3 py-2 fs-sm hover:bg-gray-100  fw-bold"
          style={{ cursor: 'pointer' }}
          onSelect={() => onEdit?.()}
        >
          編輯
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-3 py-2 fs-sm hover:bg-gray-100  fw-bold"
          style={{ cursor: 'pointer' }}
          onSelect={() => onShare?.()}
        >
          分享
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-3 py-2 fs-sm hover:bg-gray-100  fw-bold"
          style={{ cursor: 'pointer' }}
          onSelect={() => onDelete?.()}
        >
          刪除
        </DropdownMenu.Item>
        <DropdownMenu.Item
          className="px-3 py-2 fs-sm hover:bg-gray-100 text-primary fw-bold"
          style={{ cursor: 'pointer' }}
          onSelect={() => onReport?.()}
        >
          檢舉
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
};

export default DropDownMenu;
