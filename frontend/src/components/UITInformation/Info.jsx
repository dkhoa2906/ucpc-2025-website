import { useState } from "react";
import { Tab } from "@headlessui/react";
import { motion } from "framer-motion";

import { MapPin } from "lucide-react";

const features = [
  {
    title: "Chất lượng đào tạo",
    content: "UIT là một trong những trường hàng đầu về Công nghệ Thông tin tại Việt Nam, với đội ngũ giảng viên chất lượng và chương trình học hiện đại."
  },
  {
    title: "Cơ sở vật chất",
    content: "Khuôn viên hiện đại, thư viện, phòng lab, wifi toàn khu vực giúp sinh viên học tập hiệu quả."
  },
  {
    title: "Hoạt động sinh viên",
    content: "CLB, cuộc thi học thuật, và sự kiện thường xuyên tạo môi trường năng động cho sinh viên."
  }
];

export default function UITInformation() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const description = "Trường Đại học Công nghệ Thông tin (UIT) - Đại học Quốc gia TP.HCM là một trong những trường đại học hàng đầu tại Việt Nam chuyên về đào tạo và nghiên cứu trong lĩnh vực công nghệ thông tin và truyền thông. UIT cam kết cung cấp nền giáo dục chất lượng cao, trang bị kiến thức và kỹ năng toàn diện cho sinh viên, giúp họ trở thành những nhà lãnh đạo công nghệ tương lai. Với cơ sở vật chất hiện đại, đội ngũ giảng viên chất lượng, và môi trường học tập sáng tạo, UIT là lựa chọn hàng đầu của những ai đam mê công nghệ.";

  return (
    <section className="relative w-full h-screen py-28 bg-gradient-to-br from-purple-900/20 to-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">


        {/* Right: Google Maps */}
        <div className="relative rounded-2xl shadow-xl border border-blue-500 glow-animation">
          <div className="absolute top-2 right-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 text-md rounded-full flex items-center gap-1">
            <MapPin size={16} />
            UIT Location
          </div>
          <iframe
            title="UIT Map"
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.225757721502!2d106.79956317480635!3d10.870426389284122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527e7e8abb0eb%3A0xec43e4b99472c18a!2zVUlUIC0gQ-G7lW5nIEE!5e0!3m2!1svi!2s!4v1747147642869!5m2!1svi!2s"
            src="https://tuyensinh.uit.edu.vn/uit-tour-360/"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            className="rounded-2xl"
          />
        </div>
        {/* Left: Tabs */}
        <div>
          <div className="relative space-y-4">
            <h2 className="text-2xl font-bold sm:text-5xl xl:text-4xl/none bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
              Khám phá UIT - Nơi ươm mầm tài năng công nghệ
            </h2>
            <p className="max-w-[600px] text-zinc-400 md:text-xl">
              {description}
            </p>
          </div>
        </div>


      </div>

      {/* Glow animation */}
      <style>{`
        .glow-animation {
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.6), 0 0 40px rgba(99, 102, 241, 0.4);
          animation: glow 2s ease-in-out infinite alternate;
        }
        @keyframes glow {
          from {
            box-shadow: 0 0 20px rgba(99, 102, 241, 0.6);
          }
          to {
            box-shadow: 0 0 40px rgba(99, 102, 241, 1);
          }
        }
      `}</style>
    </section>
  );
}