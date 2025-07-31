import UserForm from "./Form/Form";
function User() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1F1D2B] via-[#2B193E] to-[#1B0B1F] absolute ">
      {/* Lớp overlay nếu muốn thêm hiệu ứng nền mờ hoặc texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />

      {/* Nội dung form */}
      <div className="relative z-10  mx-auto">
        <UserForm />
      </div>
    </div>
  );
}
export default User;
