import React, { useState } from "react";
import RulesItem from "./RulesItem/RulesItem";

const ruleData = {
  "Đối tượng": {
    title: "Đối tượng",
    description:
      "Các bạn học sinh, sinh viên đang theo học tại các trường trên địa bàn thành phố Hồ Chí Minh.",
  },
  "Hình thức đăng ký": {
    title: "Hình thức đăng ký",
    description:
      "- Đối với sinh viên: đăng kí theo đội 3 thành viên.\n" +
      "- Đối với học sinh: đăng kí theo đội 3 thành viên và 1 huấn luyện viên là giáo viên của trường.\n\n" +
      "LƯU Ý:\n" +
      "- Đối với các sinh viên đã có giải môn Tin học (giải nhất, nhì, ba) trong các kỳ thi cấp Quốc gia trở lên (Học sinh giỏi Quốc gia môn Tin học, Olympic Tin học Sinh viên Việt Nam, ICPC National/Regional,..) sẽ KHÔNG được tham dự.",
  },
  "Quy định": {
    title: "Quy định",
    description:
      "Thí sinh phải tuân thủ các quy định sau đây trong suốt quá trình tham gia...",
  },
};

function Rules() {
  const [activeType, setActiveType] = useState("Đối tượng");
  const handleClick = (type) => {
    setActiveType(type);
  };

  return (
    <section id="Rules">
      <div className="space-y-1 mx-16 " id={"rules-section"}>
        {/* Header Section */}
        <div className="bg-[#EDEAD2] text-[#3e1d53] py-10 px-4 rounded-2xl shadow-lg ">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="pb-4 text-4xl font-extrabold uppercase mb-6 border-b-4 border-[#3e1d53] w-200 inline-block px-4">
              Thể lệ cuộc thi
            </h2>
            <div className="flex justify-center space-x-8 mt-6 text-center font-semibold text-lg">
              <div
                className={`relative type-item cursor-pointer py-2 px-4 text-lg ${activeType === "Đối tượng"
                    ? "text-[#3e1d53] tab-border"
                    : "text-[#3e1d53] opacity-70 hover:opacity-100"
                  }`}
                onClick={() => handleClick("Đối tượng")}
              >
                <p>Đối tượng</p>
              </div>
              <div
                className={`relative type-item cursor-pointer py-2 px-4 text-lg ${activeType === "Hình thức đăng ký"
                    ? "text-[#3e1d53] tab-border"
                    : "text-[#3e1d53] opacity-70 hover:opacity-100"
                  }`}
                onClick={() => handleClick("Hình thức đăng ký")}
              >
                <p>Hình thức đăng ký</p>
              </div>
              <div
                className={`relative type-item cursor-pointer py-2 px-4 text-lg ${activeType === "Quy định"
                    ? "text-[#3e1d53] tab-border"
                    : "text-[#3e1d53] opacity-70 hover:opacity-100"
                  }`}
                onClick={() => handleClick("Quy định")}
              >
                <p>Quy định</p>
              </div>
            </div>
          </div>
        </div>

        <div className="body">
          {/*Content*/}
          <RulesItem
            title={activeType}
            description={ruleData[activeType].description}
          />
        </div>
      </div>
    </section>

  );
}

export default Rules;
