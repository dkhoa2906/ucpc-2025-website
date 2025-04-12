import UserForm from "./Form/Form";
import puzzle_background from "../../assets/puzzle_background.png";
import mountain from "../../assets/mountain.png";
function User() {
  return (
    
    <div
      style={{ backgroundImage: `url(${mountain})` }}
      className="relative h-screen bg-[length:100%] w-full overflow-hidden flex items-center justify-center "
    >
      
      <div className="relative z-20">
        <UserForm />
      </div>
      
    </div>
  );
}

export default User;
