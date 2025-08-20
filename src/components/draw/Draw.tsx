'use client';

import { ReactSketchCanvasRef } from 'react-sketch-canvas';
import dynamic from 'next/dynamic';
import { useRef, useState } from 'react';
import Image from 'next/image';

// 動態載入，避免 SSR 時找不到 window/canvas
const Sketch = dynamic(() => import('react-sketch-canvas').then((m) => m.ReactSketchCanvas), {
  ssr: false,
});

export default function DrawPage() {
  const ref = useRef<ReactSketchCanvasRef>(null);
  const [img, setImg] = useState<string>('');

  const savePNG = async () => {
    if (!ref.current) return;
    const dataUrl = await ref.current.exportImage('png'); // or 'jpeg'
    setImg(dataUrl); // dataUrl 可上傳或直接顯示
  };

  const clear = () => ref.current?.clearCanvas();

  return (
    <div style={{ padding: 16 }}>
      <div style={{ border: '1px solid #ddd', borderRadius: 12, overflow: 'hidden' }}>
        <Sketch
          ref={ref}
          width="100%"
          height="300px"
          strokeWidth={4}
          strokeColor="#111"
          canvasColor="white"
          style={{ touchAction: 'none' }} // 手機避免滾動干擾
        />
      </div>

      <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
        <button onClick={savePNG}>存成圖片</button>
        <button onClick={clear}>清空</button>
      </div>

      {img && (
        <>
          <p>預覽：</p>
          <Image
            src={img} // 必須是有效 URL，例如 /uploads/drawing.png 或 https://...
            alt="sketch"
            width={360}
            height={360}
            style={{ width: '100%', maxWidth: 360, height: 'auto' }}
          />
          {/* 也可用 a 下載：
          <a href={img} download="drawing.png">下載圖片</a>
          */}
        </>
      )}
    </div>
  );
}
