'use client';

import HotEmojiSupportDesc from './HotEmojiSupportDesc';
import HotEmojiSupportSuccess from './HotEmojiSupportSuccess';
import HotEmojiSupportFail from './HotEmojiSupportFail';
import { useState } from 'react';

const HotEmojiSupport = () => {
  const [supportState, setSupportState] = useState<'none' | 'success' | 'fail'>('none');
  return (
    <div className="container-fluid mt-10" style={{ maxWidth: '700px' }}>
      {supportState === 'none' ? (
        <HotEmojiSupportDesc setSupportState={setSupportState} />
      ) : supportState === 'success' ? (
        <HotEmojiSupportSuccess />
      ) : (
        <HotEmojiSupportFail />
      )}
    </div>
  );
};

export default HotEmojiSupport;
