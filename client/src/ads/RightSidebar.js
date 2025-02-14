import React, { useEffect } from 'react';
import './Ads.css';

const RightSidebar = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="sidebar-ad right-sidebar">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7505662209991654"
        data-ad-slot="4988304071"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default RightSidebar;
