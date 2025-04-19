function RulesItem({ title, description }) {
  const lines = description.split("\n");
  return (
    <div className="bg-[#492A51] w-full text-center h-100">
      <div className="pb-4 text-4xl pt-5 text-center font-extrabold uppercase mb-6 border-b-4 border-[#EDEAD2] w-200 inline-block px-4 text-[#EDEAD2]">
        {title}
      </div>
      {/* <div className="text-[#EDEAD2] text-lg leading-relaxed space-y-2">
        {lines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </div> */}
      <div className="text-lg text-[#EDEAD2] w-200 leading-loose whitespace-pre-line max-w-5xl mx-auto text-left">
        {description}
      </div>
    </div>
  );
}
export default RulesItem;
