'use client';

import React, { useState } from 'react';

interface ShareButtonProps {
  title: string;
  text: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ title, text }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text,
          url: shareUrl,
        });
      } catch (error) {
        console.log('Error sharing', error);
      }
    } else {
      // Fallback to copying the URL
      try {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
      } catch (err) {
        console.log('Failed to copy: ', err);
      }
    }
  };

  return (
    <button 
      onClick={handleShare}
      className="bg-[#FFDBA6] text-[#BB5C68] font-dm-mono text-xl py-2 px-4 rounded hover:bg-[#FFE8C4] transition-colors duration-300"
    >
      {copied ? 'LINK COPIED!' : 'SHARE'}
    </button>
  );
};

export default ShareButton;