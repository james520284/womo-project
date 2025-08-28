'use client';

import * as Accordion from '@radix-ui/react-accordion';
import * as Dialog from '@radix-ui/react-dialog';
import style from './MyProfileHobbyTagModal.module.scss';
import { IconArrow } from '@/components/icons';
import { useState, useEffect, memo } from 'react';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  defaultSelectedTags?: string[];
  onSave: (tags: string[]) => void;
};
type Categories = { id: string; title: string; tags: string[] };

const MyProfileHobbyTagModal = ({
  open,
  onOpenChange,
  defaultSelectedTags = [],
  onSave,
}: Props) => {
  const categories: Categories[] = [
    { id: 'food', title: '美食', tags: ['日式料理', '泰式料理', '中式料理', '韓式料理'] },
    { id: 'music', title: '音樂', tags: ['流行', '古典', '爵士'] },
    { id: 'export', title: '運動', tags: ['籃球', '足球', '游泳', '棒球', '撞球'] },
  ];
  const [selectTags, setSelectTags] = useState<string[]>(defaultSelectedTags);
  const isSelected = (tag: string) => selectTags.includes(tag);
  const toggleTag = (tag: string) => {
    setSelectTags((prev) =>
      prev.includes(tag) ? selectTags.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  // 初始化
  useEffect(() => {
    if (open) setSelectTags(defaultSelectedTags);
  }, [open, defaultSelectedTags]);

  // 點確定再傳給父層，再關閉
  const handleSave = () => {
    onSave(selectTags);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <div className={style.overlay} />
        <Dialog.Content className={style.modal}>
          <Dialog.Close asChild>
            <button
              className={style.closeButton}
              aria-label="關閉"
              onClick={() => onOpenChange(false)}
            >
              ✕
            </button>
          </Dialog.Close>
          <Dialog.Title>
            <span className="fs-6 fw-bold">我感興趣的</span>
          </Dialog.Title>
          {/* 摺疊區 */}
          <Accordion.Root
            type="single"
            collapsible
            className={style.root}
            defaultValue={categories[0]?.id}
          >
            {categories.map((category) => (
              <Accordion.Item key={category.id} value={category.id} className={style.item}>
                <Accordion.Header className={style.header}>
                  <Accordion.Trigger className={style.trigger}>
                    <span>{category.title}</span>

                    <IconArrow className={style.chevron} width={16} />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className={style.content}>
                  <div className={style.contentInner}>
                    {category.tags.map((tag) => (
                      <button
                        type="button"
                        key={tag}
                        className={`${isSelected(tag) ? style.tagActive : style.tag}`}
                        onClick={() => toggleTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
          <button type="button" onClick={handleSave} className={style.submitBtn}>
            確定
          </button>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default memo(MyProfileHobbyTagModal);
