'use client';

import { useState, useRef } from 'react';
import styles from './Textarea.module.scss';

export default function AutoResizeTextarea() {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = 'auto'; // 先重置高度，避免一直變高
      el.style.height = `${el.scrollHeight}px`; // 根據內容調整高度
    }
    setValue(e.target.value);
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      className={styles.myTextarea}
      rows={1} // 預設 1 行
      placeholder="我想說..."
    />
  );
}
