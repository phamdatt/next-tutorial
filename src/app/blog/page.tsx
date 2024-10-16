// "use client";
// import React from "react";
// import { useTranslation } from "react-i18next";
// export default function BlogPage() {
//   const { t } = useTranslation();
//   return (
//     <div className="container mx-auto">
//       <div className="columns-2 md:columns-3 lg:columns-4">
//         <div className="bg-indigo-500">
//           <p className="text-blue-light">asdas</p>
//         </div>
//         <div className="bg-indigo-500">
//           <p className="text-blue">asdas</p>
//         </div>
//         <div className="bg-indigo-500">
//           <p className="text-blue-dark">asdas</p>
//         </div>
//       </div>
//       <div className="columns-2">
//         <div className="flex flex-row">
//           <div className="basis-1/4 bg-pink">01</div>
//           <div className="basis-1/4 bg-pink-light">02</div>
//           <div className="basis-1/2 bg-pink-dark">03</div>
//         </div>
//       </div>
//       <div className="flex flex-row">
//         <div className="basis-1/4 bg-gray">01</div>
//         <div className="basis-1/4 bg-gray-light">02</div>
//         <div className="basis-1/2 bg-gray-dark">03</div>
//       </div>
//     </div>
//   );
// }

"use client";
import React, { useEffect, useRef, useState } from "react";
import _ from "lodash";
import "./style.css";

export default function BlogPage() {

  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
  const [offset, setOffset] = useState(0);

  const handleFocus = () => {
    setOffset(window.scrollY); // Lưu vị trí cuộn khi focus vào input
  };

  const handleBlur = () => {
    setOffset(0); // Reset offset khi input mất focus
  };
  return (
    <div>
      <header
        className="header"
        style={{
          position: 'sticky',
          top: 0,
          width: '100%',
          zIndex: 1000,
          backgroundColor: '#fff', // Đảm bảo header có background color
        }}
      >
        Sticky Header
      </header>
      
      <div style={{ height: '2000px' }}>
        {/* Nội dung trang để cuộn */}
      </div>
      <input
        type="text"
        placeholder="Nhập văn bản"
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}
