// src/Comments.tsx
'use client';

import { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

interface CommentsProps {
  issueTerm: string;
  repo?: string;
}

const Comments: React.FC<CommentsProps> = ({ issueTerm, repo = 'shade-cool/next-comments-vault' }) => {
  const { theme } = useTheme();
  const commentsSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (commentsSection.current) {
      const script = document.createElement('script');
      script.src = 'https://utteranc.es/client.js';
      script.async = true;
      script.crossOrigin = 'anonymous';
      script.setAttribute('repo', repo);
      script.setAttribute('issue-term', issueTerm);
      script.setAttribute('theme', theme === 'dark' ? 'github-dark' : 'github-light');
      commentsSection.current.appendChild(script);
    }
  }, [issueTerm, theme, repo]);

  return <div ref={commentsSection} />;
};

export default Comments;
