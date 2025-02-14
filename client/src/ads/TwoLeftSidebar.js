import React, { useEffect } from 'react';
import './Ads.css';

const TwoLeftSidebar = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="sidebar-ad two-left-sidebar">
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-7505662209991654"
        data-ad-slot="6457298416"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default TwoLeftSidebar;
