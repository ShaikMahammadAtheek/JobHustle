// // src/components/AdBanner.js  -------------Main
// import React, { useEffect } from 'react';

// const AdBanner = ({ adClient, adSlot, adStyle }) => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.async = true;
//     script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
//     document.head.appendChild(script);

//     script.onload = () => {
//       (window.adsbygoogle = window.adsbygoogle || []).push({});
//     };

//     return () => {
//       document.head.removeChild(script);
//     };
//   }, []);

//   return (
//     <div style={{ margin: '20px 0', textAlign: 'center', ...adStyle }}>
//       <ins className="adsbygoogle"
//            style={{ display: 'block' }}
//            data-ad-client={adClient} 
//            data-ad-slot={adSlot} 
//            data-ad-format="auto"></ins>
//     </div>
//   );
// };

// export default AdBanner;


// import React, { useEffect, useRef } from "react";

// const AdBanner = ({ adClient, adSlot, adStyle }) => {
//   const adRef = useRef(null);
//   const hasAdLoaded = useRef(false); // Prevents multiple ad pushes

//   useEffect(() => {
//     if (window.adsbygoogle && adRef.current) {
//       const adContainer = adRef.current;

//       // ✅ Ensure Ad Container Has a Width Before Pushing
//       if (adContainer.offsetWidth > 0 && !hasAdLoaded.current) {
//         try {
//           window.adsbygoogle.push({});
//           hasAdLoaded.current = true; // Mark this ad slot as loaded
//           console.log(`Ad loaded for slot: ${adSlot}`);
//         } catch (e) {
//           console.error("AdSense error:", e);
//         }
//       } else {
//         console.log(`Skipping ad load, auto ads already placed for slot: ${adSlot}`);
//       }
//     }
//   }, [adSlot]); // Runs only when `adSlot` changes

//   return (
//     <div style={{ margin: "20px 0", textAlign: "center", ...adStyle }}>
//       <ins
//         className="adsbygoogle"
//         ref={adRef}
//         style={{ display: "block", minWidth: "300px", height: "250px" }} // ✅ Ensures proper width
//         data-ad-client={adClient}
//         data-ad-slot={adSlot}
//         data-ad-format="auto"
//         data-full-width-responsive="true"
//       ></ins>
//     </div>
//   );
// };

// export default AdBanner;   -----------------MAin2




import React, { useEffect, useRef, useState } from "react";

const AdBanner = ({ adClient, adSlot, adStyle, allowAutoAd }) => {
  const adRef = useRef(null);
  const hasAdLoaded = useRef(false);
  const [isAutoAd, setIsAutoAd] = useState(false);

  useEffect(() => {
    if (!window.adsbygoogle) {
      console.error("Google AdSense script not loaded.");
      return;
    }

    const loadAd = () => {
      if (!adRef.current) return;

      // Wait until the ad container has a valid width
      if (adRef.current.offsetWidth === 0) {
        setTimeout(loadAd, 500); // Retry loading ad
        return;
      }

      // If auto ads already placed, do not load manual ad
      if (!hasAdLoaded.current) {
        try {
          window.adsbygoogle.push({});
          hasAdLoaded.current = true;
          console.log(`✅ Ad loaded for slot: ${adSlot}`);
        } catch (e) {
          console.error("AdSense error:", e);
        }
      } else {
        console.warn(`⚠️ Ad slot ${adSlot} already loaded, skipping push`);
      }
    };

    // Allow auto ads only if explicitly allowed
    if (allowAutoAd) {
      setIsAutoAd(true);
    }

    loadAd();
  }, [adSlot, allowAutoAd]);

  return (
    <div style={{ textAlign: "center", ...adStyle }}>
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={{
          display: "block",
          minWidth: "300px",
          height: "250px",
          backgroundColor: isAutoAd ? "#f5f5f5" : "transparent",
        }}
        data-ad-client={adClient}
        data-ad-slot={adSlot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default AdBanner;










// import { useEffect, useRef } from "react";

// const AdBanner = ({ client, slot, format = "auto", responsive = true }) => {
//   const adRef = useRef(null);

//   useEffect(() => {
//     if (window.adsbygoogle && adRef.current) {
//       try {
//         window.adsbygoogle.push({});
//       } catch (e) {
//         console.error("AdSense error:", e);
//       }
//     }
//   }, []);

//   return (
//     <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
//       <ins
//         ref={adRef}
//         className="adsbygoogle"
//         style={{ display: "block", width: "100%", height: "250px" }}
//         data-ad-client={client}
//         data-ad-slot={slot}
//         data-ad-format={format}
//         data-full-width-responsive={responsive ? "true" : "false"}
//       />
//       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
//     </div>
//   );
// };

// export default AdBanner;
