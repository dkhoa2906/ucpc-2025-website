import React, { useState } from "react";
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
          - Học sinh: đăng ký theo đội 3 thành viên và 1 huấn luyện viên là giáo viên trường.
        </p>
        <p className="font-semibold">Lưu ý:</p>
        <ul className="list-disc ml-6 text-sm">
          <li>
            Sinh viên từng đạt giải Quốc gia trở lên môn Tin sẽ không được tham gia.
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
  const [activeTab, setActiveTab] = useState("audience");

  return (
    <section
      id="Rules"
      className="w-full px-6 md:px-20 bg-gradient-to-br from-purple-900/20 to-black h-screen py-12 md:py-24 lg:py-32 relative overflow-hidden text-white"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />



      {/* Nội dung chính */}
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="relative inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-md text-white">
          Rules
        </div>
        <h2 className="relative text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
          Thể lệ cuộc thi
        </h2>
        <p className="relative max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        Cùng khám phá những điều kiện và quy định giúp bạn sẵn sàng chinh phục đấu trường lập trình.
        </p>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">


        <div className="relative w-full flex justify-center my-10 items-start py-10">
          {/* Đường ngang chính */}
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[70%] h-1 bg-cyan-300" />
          <div className="absolute -top-10 flex flex-col items-center space-y-3 text-center max-w-[200px]">
            <div className="h-20 w-1 bg-cyan-300" />


          </div>
          {/* Các nhánh */}
          <div className="flex justify-center gap-38   z-10">
            {/* Nhánh 1 */}
            <div className="flex flex-col items-center space-y-0 text-center w-[250px] ">
              <div className="h-13 w-1 bg-cyan-300" />
              <div className="w-5 h-5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50 ring-2 ring-white" />
              <div className="h-5" />
              <h3 className="font-semibold text-lg mt-2">Đối tượng</h3>
              <div className="h-3" />
              <p className="text-md text-white/80 text-left">
                Các bạn học sinh, sinh viên đang theo học tại các trường trên địa bàn
                thành phố Hồ Chí Minh.
              </p>
            </div>

            {/* Nhánh 2 */}
            <div className="flex flex-col items-center space-y-0 text-center w-[250px]">
              <div className="h-13 w-1 bg-cyan-300" />
              <div className="w-5 h-5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50 ring-2 ring-white" />
              <div className="h-5" />
              <h3 className="font-semibold text-lg mt-2">Hình thức đăng ký</h3>
              <div className="h-3" />
              <p className="text-md text-white/80 text-left"> 
                - Sinh viên đăng ký theo đội gồm 3 thành viên.<br />
                - Học sinh đăng ký theo đội gồm 3 thành viên và 1 huấn luyện viên là giáo viên trường.<br/>
                Lưu ý:<br/>
                Sinh viên từng đạt giải Quốc gia trở lên môn Tin sẽ không được tham gia.

              </p>
            </div>

            {/* Nhánh 3 */}
            <div className="flex flex-col items-center space-y-0 text-center w-[250px]">
              <div className="h-13 w-1 bg-cyan-300" />
              <div className="w-5 h-5 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50 ring-2 ring-white" />
              <div className="h-5" />
              <h3 className="font-semibold text-lg mt-2">Quy định</h3>
              <div className="h-3" />
              <p className="text-md text-white/80 text-left">
                - Không sử dụng internet trong thời gian thi.<br />
                - Không gian lận hoặc trao đổi giữa các đội.<br />
                - Ban tổ chức có toàn quyền xử lý vi phạm.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
