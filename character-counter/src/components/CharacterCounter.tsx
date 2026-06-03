import { useState } from 'react';
import cn from 'classnames';

type CharacterCounterProps = {
  limit: number;
  ariaLabel?: string;
};

const CharacterCounter = ({ limit, ariaLabel }: CharacterCounterProps) => {
  const [content, setContent] = useState('');
  const isLimit = content.length >= limit;

  const contentStyle = cn('text-sm  outline-none rounded h-20', {
    'border border-red-400': isLimit,
  });

  return (
    <div>
      <div className="text-xs text-slate-600">
        {content.length} / {limit}
      </div>
      <textarea
        className={contentStyle}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        aria-label={ariaLabel}
        maxLength={limit}
      />
    </div>
  );
};

export default CharacterCounter;
