// src/components/AdBanner.js
import React, { useEffect } from 'react';

const AdBanner = ({ adClient, adSlot, adStyle }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.head.appendChild(script);

    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div style={{ margin: '20px 0', textAlign: 'center', ...adStyle }}>
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client={adClient} 
           data-ad-slot={adSlot} 
           data-ad-format="auto"></ins>
    </div>
  );
};

export default AdBanner;
