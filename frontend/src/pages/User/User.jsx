import UserForm from "./Form/Form";
import puzzle_background from "../../assets/puzzle_background.png";
import mountain from "../../assets/mountain.png";
function User() {
  return (
    <div
      style={{ backgroundImage: `url(${mountain})` }}
      className="absolute h-screen bg-[length:101%] bg-no-repeat w-full overflow-hidden flex items-center justify-center bg-[position:0_-100px] "
    >
      <div className="relative z-20">
        <UserForm />
      </div>
    </div>
  );
}

export default User;
