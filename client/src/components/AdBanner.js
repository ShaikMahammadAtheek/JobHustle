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




import React, { useEffect, useRef } from "react";

const AdBanner = ({ adClient, adSlot, adStyle }) => {
  const adRef = useRef(null);
  const hasAdLoaded = useRef(false); // Prevents multiple ad pushes

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.adsbygoogle && adRef.current) {
        const adContainer = adRef.current;

        // Ensure the ad container has a width before loading the ad
        if (adContainer.offsetWidth > 0 && !hasAdLoaded.current) {
          try {
            window.adsbygoogle.push({});
            hasAdLoaded.current = true; // Mark this ad slot as loaded
            console.log(`Ad loaded for slot: ${adSlot}`);
            clearInterval(interval); // Stop checking after successful load
          } catch (e) {
            console.error("AdSense error:", e);
          }
        }
      }
    }, 500); // Check every 500ms

    return () => clearInterval(interval);
  }, [adSlot]); // Runs only when `adSlot` changes

  return (
    <div style={{ margin: "20px 0", textAlign: "center", ...adStyle }}>
      <ins
        className="adsbygoogle"
        ref={adRef}
        style={{ display: "block", minWidth: "300px", height: "250px" }} // Ensures proper width
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
