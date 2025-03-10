import React, { useEffect, useRef } from "react";

const GoogleAd = ({ slot, className = "", style = {} }) => {
  const adRef = useRef(null);

  useEffect(() => {
    if (window.adsbygoogle && adRef.current) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className={`adsbygoogle ${className}`}
      style={{
        width: "100%",
        minHeight: "100px",
        display: "block",
        ...style, // Allow additional custom styles if needed
      }}
      data-ad-client="ca-pub-7505662209991654"
      data-ad-slot={slot}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
};

export default GoogleAd;
