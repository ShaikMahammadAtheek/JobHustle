import React, { useEffect } from 'react';
import './Ads.css';// Importing CSS for styling

const LeftSidebar = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="sidebar-ad left-sidebar">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7505662209991654"
        data-ad-slot="9114654878"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default LeftSidebar;
