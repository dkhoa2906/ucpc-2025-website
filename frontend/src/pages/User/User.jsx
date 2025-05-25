import UserForm from "./Form/Form";
import puzzle_background from "../../assets/puzzle_background.png";
import mountain from "../../assets/mountain.png";
function User() {
  return (
    <div
      style={{ backgroundImage: `url(${mountain})` }}
      className="absolute h-screen bg-[length:101%] bg-no-repeat w-full overflow-hidden flex items-center justify-center bg-[position:0_-100px] "
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black z-0" />
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] opacity-10 mix-blend-overlay z-0" />

      <div className="relative z-20">
        <UserForm />
      </div>
    </div>
  );
}

export default User;
