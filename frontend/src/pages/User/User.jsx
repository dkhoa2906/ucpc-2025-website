import UserForm from "./Form/Form";
import puzzle_background from "../../assets/puzzle_background.png";
import mountain from "../../assets/mountain.png";
function User() {
  return (
    
    <div
      style={{ backgroundImage: `url(${mountain})` }}
      className="relative h-screen w-screen overflow-hidden bg-[#5C235B] flex items-center justify-center "
    >
      <div className="absolute inset-0 pointer-events-none z-10 overlay-blur"></div>
      <div className="relative z-20">
        <UserForm />
      </div>
      
    </div>
  );
}

export default User;
