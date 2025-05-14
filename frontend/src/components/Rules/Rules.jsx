// import React, { useState, useEffect, useRef } from "react";
// import { Users, FileText, Shield } from "lucide-react";
// import clsx from "clsx";

// const tabs = [
//   {
//     id: "audience",
//     label: "Đối tượng",
//     icon: <Users size={18} />,
//     content: (
//       <p>
//         Các bạn học sinh, sinh viên đang theo học tại các trường trên địa bàn
//         thành phố Hồ Chí Minh.
//       </p>
//     ),
//   },
//   {
//     id: "format",
//     label: "Hình thức đăng ký",
//     icon: <FileText size={18} />,
//     content: (
//       <div className="space-y-2">
//         <p>- Sinh viên: đăng ký theo đội 3 thành viên.</p>
//         <p>
//           - Học sinh: đăng ký theo đội 3 thành viên và 1 huấn luyện viên là giáo
//           viên trường.
//         </p>
//         <p className="font-semibold">Lưu ý:</p>
//         <ul className="list-disc ml-6 text-sm">
//           <li>
//             Sinh viên từng đạt giải Quốc gia trở lên môn Tin sẽ không được tham
//             gia.
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: "rules",
//     label: "Quy định",
//     icon: <Shield size={18} />,
//     content: (
//       <ul className="list-disc ml-5 space-y-1">
//         <li>Không sử dụng internet trong thời gian thi.</li>
//         <li>Không gian lận, trao đổi giữa các đội.</li>
//         <li>Ban tổ chức có quyền xử lý các hành vi vi phạm.</li>
//       </ul>
//     ),
//   },
// ];

// export default function Rules() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   // Các refs cho nhánh để theo dõi khi chúng xuất hiện
//   const branch1Ref = useRef(null);
//   const branch2Ref = useRef(null);
//   const branch3Ref = useRef(null);
//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   // Trạng thái visible cho từng nhánh
//   const [branch1Visible, setBranch1Visible] = useState(false);
//   const [branch2Visible, setBranch2Visible] = useState(false);
//   const [branch3Visible, setBranch3Visible] = useState(false);
//   const [card1Visible, setCard1Visible] = useState(false);
//   const [card2Visible, setCard2Visible] = useState(false);
//   const [card3Visible, setCard3Visible] = useState(false);
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true); // Khi phần tử chính xuất hiện
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   // Hàm theo dõi các nhánh
//   const observeBranch = (ref, setVisible) => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setVisible(true);
//         } else {
//           setVisible(false);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   };

//   useEffect(() => {
//     const cleanBranch1 = observeBranch(branch1Ref, setBranch1Visible);
//     const cleanBranch2 = observeBranch(branch2Ref, setBranch2Visible);
//     const cleanBranch3 = observeBranch(branch3Ref, setBranch3Visible);
//     const cleanCard1 = observeBranch(card1Ref, setCard1Visible);
//     const cleanCard2 = observeBranch(card2Ref, setCard2Visible);
//     const cleanCard3 = observeBranch(card3Ref, setCard3Visible);
//     return () => {
//       cleanBranch1();
//       cleanBranch2();
//       cleanBranch3();
//       cleanCard1();
//       cleanCard2();
//       cleanCard3();
//     };
//   }, []);

//   return (
//     <section
//       id="Rules"
//       className="w-full px-6 md:px-20 bg-gradient-to-br from-purple-900/20 to-black h-screen py-12 md:py-24 lg:py-32 relative overflow-hidden text-white"
//       ref={sectionRef}
//     >
//       {/* Background gradient */}
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />

//       {/* Nội dung chính */}
//       <div className="flex flex-col items-center justify-center space-y-4 text-center">
//         <div className="relative inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-md text-white">
//           Rules
//         </div>
//         <h2 className="relative text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
//           Thể lệ cuộc thi
//         </h2>
//         <p className="relative max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//           Cùng khám phá những điều kiện và quy định giúp bạn sẵn sàng chinh phục
//           đấu trường lập trình.
//         </p>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="relative w-full flex justify-center my-10 items-start py-10">
//           {/* Thanh dọc động */}
//           <div
//             className={clsx("absolute top-0 left-1/2 w-1 bg-cyan-300", {
//               "animate-dropDown": isVisible,
//             })}
//           />

//           {/* Thanh ngang động */}
//           <div
//             className={clsx("absolute top-[80px] left-1/2 h-1 bg-cyan-300", {
//               "animate-expandLine": isVisible,
//             })}
//           />

//           {/* Ba nhánh nội dung */}
//           <div className="relative w-full mt-[100px] z-10 h-[300px]">
//             {/* Nhánh 1 */}
//             <div className="absolute left-[calc(10%-66px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />
//               <h3 className="font-semibold text-lg mt-3">Đối tượng</h3>
//               <div
//                 ref={card1Ref}
//                 className={clsx(
//                   "transition-opacity duration-700 ease-in-out",
//                   card1Show
//                     ? "opacity-100"
//                     : "opacity-0 h-0 overflow-hidden pointer-events-none"
//                 )}
//               >
//                 Các bạn học sinh, sinh viên đang theo học tại các trường trên
//                 địa bàn thành phố Hồ Chí Minh.
//               </div>
//             </div>
//             {/* Nhánh 2 */}
//             <div className="absolute left-[calc(50%-123px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />
//               <h3 className="font-semibold text-lg mt-3">Hình thức đăng ký</h3>
//               <div
//                 ref={card2Ref}
//                 className={clsx(
//                   "card-animation mt-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 text-left text-white text-sm transition-all duration-700",
//                   {
//                     "opacity-100 translate-y-0": card2Visible,
//                     "opacity-0 translate-y-10": !card2Visible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.5s",
//                   animationFillMode: "forwards",
//                 }}
//               >
//                 <p>- Sinh viên đăng ký theo đội 3 thành viên.</p>
//                 <p>
//                   - Học sinh đăng ký theo đội 3 thành viên và 1 huấn luyện viên
//                   là giáo viên.
//                 </p>
//                 <p>
//                   Lưu ý: Sinh viên từng đạt giải Quốc gia sẽ không được tham
//                   gia.
//                 </p>
//               </div>
//             </div>
//             {/* Nhánh 3 */}
//             <div className="absolute left-[calc(50%+277px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />
//               <h3 className="font-semibold text-lg mt-3">Quy định</h3>
//               <div
//                 ref={card3Ref}
//                 className={clsx(
//                   "card-animation mt-4 bg-white/10 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/20 text-left text-white text-sm transition-all duration-700",
//                   {
//                     "opacity-100 translate-y-0": card3Visible,
//                     "opacity-0 translate-y-10": !card3Visible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.5s",
//                   animationFillMode: "forwards",
//                 }}
//               >
//                 <p>- Không sử dụng internet trong thời gian thi.</p>
//                 <p>- Không gian lận hoặc trao đổi giữa các đội.</p>
//                 <p>- Ban tổ chức có toàn quyền xử lý vi phạm.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// import React, { useState, useEffect, useRef } from "react";
// import { Users, FileText, Shield } from "lucide-react";
// import clsx from "clsx";

// const tabs = [
//   {
//     id: "audience",
//     label: "Đối tượng",
//     icon: <Users size={18} />,
//     content: (
//       <p>
//         Các bạn học sinh, sinh viên đang theo học tại các trường trên địa bàn
//         thành phố Hồ Chí Minh.
//       </p>
//     ),
//   },
//   {
//     id: "format",
//     label: "Hình thức đăng ký",
//     icon: <FileText size={18} />,
//     content: (
//       <div className="space-y-2">
//         <p>- Sinh viên: đăng ký theo đội 3 thành viên.</p>
//         <p>
//           - Học sinh: đăng ký theo đội 3 thành viên và 1 huấn luyện viên là giáo
//           viên trường.
//         </p>
//         <p className="font-semibold">Lưu ý:</p>
//         <ul className="list-disc ml-6 text-sm">
//           <li>
//             Sinh viên từng đạt giải Quốc gia trở lên môn Tin sẽ không được tham
//             gia.
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: "rules",
//     label: "Quy định",
//     icon: <Shield size={18} />,
//     content: (
//       <ul className="list-disc ml-5 space-y-1">
//         <li>Không sử dụng internet trong thời gian thi.</li>
//         <li>Không gian lận, trao đổi giữa các đội.</li>
//         <li>Ban tổ chức có quyền xử lý các hành vi vi phạm.</li>
//       </ul>
//     ),
//   },
// ];

// export default function Rules() {
//   const [isVisible, setIsVisible] = useState(false);
//   const sectionRef = useRef(null);

//   const card1Ref = useRef(null);
//   const card2Ref = useRef(null);
//   const card3Ref = useRef(null);

//   const [card1Show, setCard1Show] = useState(false);
//   const [card2Show, setCard2Show] = useState(false);
//   const [card3Show, setCard3Show] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           setIsVisible(false);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const observeWithDelay = (ref, setVisibleFn) => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           const timeout = setTimeout(() => {
//             setVisibleFn(true);
//           }, 2600);
//           return () => clearTimeout(timeout);
//         } else {
//           setVisibleFn(false);
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (ref.current) observer.observe(ref.current);

//     return () => {
//       if (ref.current) observer.unobserve(ref.current);
//     };
//   };

//   useEffect(() => {
//     const clean1 = observeWithDelay(card1Ref, setCard1Show);
//     const clean2 = observeWithDelay(card2Ref, setCard2Show);
//     const clean3 = observeWithDelay(card3Ref, setCard3Show);

//     return () => {
//       clean1();
//       clean2();
//       clean3();
//     };
//   }, []);

//   return (
//     <section
//       id="Rules"
//       className="w-full px-6 md:px-20 bg-gradient-to-br from-purple-900/20 to-black h-screen py-12 md:py-24 lg:py-32 relative overflow-hidden text-white"
//       ref={sectionRef}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
//       <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />

//       <div className="flex flex-col items-center justify-center space-y-4 text-center">
//         <div className="relative inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-md text-white">
//           Rules
//         </div>
//         <h2 className="relative text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
//           Thể lệ cuộc thi
//         </h2>
//         <p className="relative max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
//           Cùng khám phá những điều kiện và quy định giúp bạn sẵn sàng chinh phục
//           đấu trường lập trình.
//         </p>
//       </div>

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="relative w-full flex justify-center my-10 items-start py-10">
//           <div
//             className={clsx("absolute top-0 left-1/2 w-1 bg-cyan-300", {
//               "animate-dropDown": isVisible,
//             })}
//           />

//           <div
//             className={clsx("absolute top-[80px] left-1/2 h-1 bg-cyan-300", {
//               "animate-expandLine": isVisible,
//             })}
//           />

//           <div className="relative w-full mt-[100px] z-10 h-[300px]">
//             {/* Nhánh 1 */}
//             <div className="absolute left-[calc(10%-66px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />

//               <div
//                 ref={card1Ref}
//                 className={clsx(
//                   "transition-opacity duration-700 ease-in-out",
//                   card1Show
//                     ? "opacity-100"
//                     : "opacity-0 h-0 overflow-hidden pointer-events-none"
//                 )}
//               >
//                 <h3 className="text-center font-semibold text-lg mt-3">
//                   Đối tượng
//                 </h3>
//                 Các bạn học sinh, sinh viên đang theo học tại các trường trên
//                 địa bàn thành phố Hồ Chí Minh.
//               </div>
//             </div>

//             {/* Nhánh 2 */}
//             <div className="absolute left-[calc(50%-123px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />

//               <div
//                 ref={card2Ref}
//                 className={clsx(
//                   "transition-opacity duration-700 ease-in-out",
//                   card2Show
//                     ? "opacity-100"
//                     : "opacity-0 h-0 overflow-hidden pointer-events-none"
//                 )}
//               >
//                 <h3 className="text-center font-semibold text-lg mt-3">
//                   Hình thức đăng ký
//                 </h3>
//                 <p>- Sinh viên đăng ký theo đội 3 thành viên.</p>
//                 <p>
//                   - Học sinh đăng ký theo đội 3 thành viên và 1 huấn luyện viên
//                   là giáo viên.
//                 </p>
//                 <p>
//                   Lưu ý: Sinh viên từng đạt giải Quốc gia sẽ không được tham
//                   gia.
//                 </p>
//               </div>
//             </div>

//             {/* Nhánh 3 */}
//             <div className="absolute left-[calc(50%+277px)] flex flex-col items-center w-[250px]">
//               <div
//                 className={clsx("absolute -top-15 w-1 bg-cyan-300", {
//                   "animate-branchDown": isVisible,
//                 })}
//               />
//               <div
//                 className={clsx(
//                   "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
//                   {
//                     "animate-fadeIn": isVisible,
//                   }
//                 )}
//                 style={{
//                   animationDelay: "2.3s",
//                   animationFillMode: "forwards",
//                 }}
//               />

//               <div
//                 ref={card3Ref}
//                 className={clsx(
//                   "transition-opacity duration-700 ease-in-out",
//                   card3Show
//                     ? "opacity-100"
//                     : "opacity-0 h-0 overflow-hidden pointer-events-none"
//                 )}
//               >
//                 <h3 className="text-center font-semibold text-lg mt-3">
//                   Quy định
//                 </h3>

//                 <p >- Không sử dụng internet trong thời gian thi.</p>
//                 <p>- Không gian lận hoặc trao đổi giữa các đội.</p>
//                 <p>- Ban tổ chức có toàn quyền xử lý vi phạm.</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import { Users, FileText, Shield } from "lucide-react";
import clsx from "clsx";

const tabs = [
  {
    id: "audience",
    label: "Đối tượng",
    icon: <Users size={18} />,
    content: (
      <p>
        Các bạn học sinh, sinh viên đang theo học tại các trường trên địa bàn
        thành phố Hồ Chí Minh.
      </p>
    ),
  },
  {
    id: "format",
    label: "Hình thức đăng ký",
    icon: <FileText size={18} />,
    content: (
      <div className="space-y-2">
        <p>- Sinh viên: đăng ký theo đội 3 thành viên.</p>
        <p>
          - Học sinh: đăng ký theo đội 3 thành viên và 1 huấn luyện viên là giáo
          viên trường.
        </p>
        <p className="font-semibold">Lưu ý:</p>
        <ul className="list-disc ml-6 text-sm">
          <li>
            Sinh viên từng đạt giải Quốc gia trở lên môn Tin sẽ không được tham
            gia.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "rules",
    label: "Quy định",
    icon: <Shield size={18} />,
    content: (
      <ul className="list-disc ml-5 space-y-1">
        <li>Không sử dụng internet trong thời gian thi.</li>
        <li>Không gian lận, trao đổi giữa các đội.</li>
        <li>Ban tổ chức có quyền xử lý các hành vi vi phạm.</li>
      </ul>
    ),
  },
];

export default function Rules() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const cardRefs = [useRef(null), useRef(null), useRef(null)];

  const [cardVisibility, setCardVisibility] = useState([false, false, false]);

  // Hàm này sẽ được gọi khi một trong các thẻ vào viewport
  const handleIntersection = (entries) => {
    let allIntersecting = true;
    // Kiểm tra tất cả các thẻ xem có cái nào không vào viewport không
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        allIntersecting = false;
      }
    });

    if (allIntersecting) {
      // Thêm độ trễ trước khi hiển thị các thẻ
      setTimeout(() => {
        setCardVisibility([true, true, true]); // Tất cả các thẻ sẽ hiển thị
      }, 2800); // Độ trễ 2.3 giây
    } else {
      // Nếu có thẻ rời khỏi viewport, reset lại hiệu ứng
      setCardVisibility([false, false, false]);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Khi 50% của tất cả các card vào viewport
    });

    // Quan sát tất cả các thẻ
    cardRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      cardRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      id="Rules"
      className="w-full px-6 md:px-20 bg-gradient-to-br from-purple-900/20 to-black h-screen py-12 md:py-24 lg:py-32 relative overflow-hidden text-white"
      ref={sectionRef}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />

      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="relative inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-md text-white">
          Rules
        </div>
        <h2 className="relative text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
          Thể lệ cuộc thi
        </h2>
        <p className="relative max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Cùng khám phá những điều kiện và quy định giúp bạn sẵn sàng chinh phục
          đấu trường lập trình.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="relative w-full flex justify-center my-10 items-start py-10">
          <div
            className={clsx("absolute top-0 left-1/2 w-1 bg-cyan-300", {
              "animate-dropDown": isVisible,
            })}
          />

          <div
            className={clsx("absolute top-[80px] left-1/2 h-1 bg-cyan-300", {
              "animate-expandLine": isVisible,
            })}
          />

          <div className="relative w-full mt-[100px] z-10 h-[300px]">
            {/* Nhánh 1 */}
            <div className="absolute left-[calc(10%-66px)] flex flex-col items-center w-[250px]">
              <div
                className={clsx("absolute -top-15 w-1 bg-cyan-300", {
                  "animate-branchDown": isVisible,
                })}
              />
              <div
                className={clsx(
                  "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
                  {
                    "animate-fadeIn": isVisible,
                  }
                )}
                style={{
                  animationDelay: "2.3s",
                  animationFillMode: "forwards",
                }}
              />

              <div
                ref={cardRefs[0]}
                className={clsx(
                  "transition-opacity duration-700 ease-in-out",
                  cardVisibility[0]
                    ? "opacity-100"
                    : "opacity-0 h-0 overflow-hidden pointer-events-none"
                )}
              >
                <h3 className="text-center font-semibold text-lg mt-3">
                  Đối tượng
                </h3>
                Các bạn học sinh, sinh viên đang theo học tại các trường trên
                địa bàn thành phố Hồ Chí Minh.
              </div>
            </div>

            {/* Nhánh 2 */}
            <div className="absolute left-[calc(50%-123px)] flex flex-col items-center w-[250px]">
              <div
                className={clsx("absolute -top-15 w-1 bg-cyan-300", {
                  "animate-branchDown": isVisible,
                })}
              />
              <div
                className={clsx(
                  "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
                  {
                    "animate-fadeIn": isVisible,
                  }
                )}
                style={{
                  animationDelay: "2.3s",
                  animationFillMode: "forwards",
                }}
              />

              <div
                ref={cardRefs[1]}
                className={clsx(
                  "transition-opacity duration-700 ease-in-out",
                  cardVisibility[1]
                    ? "opacity-100"
                    : "opacity-0 h-0 overflow-hidden pointer-events-none"
                )}
              >
                <h3 className="text-center font-semibold text-lg mt-3">
                  Hình thức đăng ký
                </h3>
                <p>- Sinh viên đăng ký theo đội 3 thành viên.</p>
                <p>
                  - Học sinh đăng ký theo đội 3 thành viên và 1 huấn luyện viên
                  là giáo viên.
                </p>
                <p>
                  Lưu ý: Sinh viên từng đạt giải Quốc gia sẽ không được tham
                  gia.
                </p>
              </div>
            </div>

            {/* Nhánh 3 */}
            <div className="absolute left-[calc(50%+277px)] flex flex-col items-center w-[250px]">
              <div
                className={clsx("absolute -top-15 w-1 bg-cyan-300", {
                  "animate-branchDown": isVisible,
                })}
              />
              <div
                className={clsx(
                  "w-5 h-5 rounded-full bg-cyan-300 shadow-lg ring-2 ring-white opacity-0",
                  {
                    "animate-fadeIn": isVisible,
                  }
                )}
                style={{
                  animationDelay: "2.3s",
                  animationFillMode: "forwards",
                }}
              />

              <div
                ref={cardRefs[2]}
                className={clsx(
                  "transition-opacity duration-700 ease-in-out",
                  cardVisibility[2]
                    ? "opacity-100"
                    : "opacity-0 h-0 overflow-hidden pointer-events-none"
                )}
              >
                <h3 className="text-center font-semibold text-lg mt-3">
                  Quy định
                </h3>
                <p>- Không sử dụng internet trong thời gian thi.</p>
                <p>- Không gian lận hoặc trao đổi giữa các đội.</p>
                <p>- Ban tổ chức có toàn quyền xử lý vi phạm.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
