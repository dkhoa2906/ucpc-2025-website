import {
    Calendar,
    Bell,
    Newspaper,
    Trophy,
    Users,
  } from "lucide-react";
  import { useState } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  
  const newsItems = [
    {
      icon: <Newspaper className="h-6 w-6 text-purple-500 mb-2" />,
      title: "Công bố thời gian tổ chức vòng loại",
      desc: "Vòng loại UCPC 2025 sẽ diễn ra vào ngày 5/6. Đăng ký trước ngày 28/5 để đảm bảo suất tham dự.",
    },
    {
      icon: <Bell className="h-6 w-6 text-purple-500 mb-2" />,
      title: "Thông báo về thay đổi thể lệ",
      desc: "Một số điều chỉnh nhỏ trong quy định đội thi và cách tính điểm đã được cập nhật ngày 2/5.",
    },
    {
      icon: <Calendar className="h-6 w-6 text-purple-500 mb-2" />,
      title: "Lịch trình chi tiết đã được công bố",
      desc: "Lịch trình từ vòng loại đến vòng chung kết nay đã được cập nhật trên trang chính thức của UCPC.",
    },
    {
      icon: <Trophy className="h-6 w-6 text-purple-500 mb-2" />,
      title: "Vinh danh các đội thi xuất sắc",
      desc: "Đội CodeBlitz, UIT Storm và NP-Hard đã có màn thể hiện xuất sắc tại UCPC năm trước.",
    },
    {
      icon: <Users className="h-6 w-6 text-purple-500 mb-2" />,
      title: "Kỷ lục số lượng thí sinh",
      desc: "UCPC 2025 thu hút hơn 40 trường với gần 500 thí sinh — con số cao nhất từ trước đến nay.",
    },
  ];
  
  export default function News() {
    const [activeIndex, setActiveIndex] = useState(0);
    const length = newsItems.length;
  
    const next = () => setActiveIndex((prev) => (prev + 1) % length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + length) % length);
  
    // Trích 3 phần tử: prev - active - next (dạng vòng tròn)
    const getCircularItems = () => {
      const prevIndex = (activeIndex - 1 + length) % length;
      const nextIndex = (activeIndex + 1) % length;
      return [newsItems[prevIndex], newsItems[activeIndex], newsItems[nextIndex]];
    };
  
    const visibleItems = getCircularItems();
  
    return (
      <section
        id="News"
        className="relative w-full h-screen py-12 bg-gradient-to-br from-purple-900/20 to-black overflow-hidden"
      >
        {/* Nền */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay" />
  
        <div className="container px-4 md:px-6 relative z-10">
          {/* Header */}
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 text-sm text-white">
                News
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight bg-gradient-to-r from-white to-zinc-300 text-transparent bg-clip-text">
                Tin tức và thông báo
              </h2>
              <p className="max-w-[900px] text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cập nhật mới nhất về cuộc thi UIT Collegiate Programming Contest
                2025: thông báo, lịch thi, thay đổi thể lệ và nhiều hơn nữa.
              </p>
            </div>
          </div>
  
          {/* Carousel - Hiển thị 3 tin và căn giữa */}
          <div className="flex justify-center items-center mt-10 space-x-6 transition-all duration-100">
            <AnimatePresence mode="wait">
              {visibleItems.map((item, idx) => {
                const handleClick = () => {
                  if (idx === 0) prev();
                  else if (idx === 2) next();
                };
                const isCenter = idx === 1;
                return (
                  <motion.div
                    key={item.title}
                    onClick={handleClick}
                    className={`transform transition-all duration-600 ${
                      isCenter
                        ? "scale-100 opacity-100 z-10"
                        : "scale-90 opacity-50 z-0"
                    } min-w-[280px] max-w-[280px] bg-zinc-800/50 border border-zinc-700 rounded-lg p-6 shadow-sm backdrop-blur-sm`}
                  >
                    <div>{item.icon}</div>
                    <h3 className="text-lg font-semibold text-white mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{item.desc}</p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
  
          {/* Thanh trạng thái (nút chấm tròn) */}
          <div className="flex justify-center mt-6 space-x-2">
            {newsItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === activeIndex
                    ? "bg-purple-500 scale-110"
                    : "bg-zinc-500 hover:bg-zinc-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  