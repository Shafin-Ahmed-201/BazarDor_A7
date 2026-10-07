import Image from "next/image";
import NavLinks from "./NavLinks";

const Navbar = () => {
  // const date = new Date().toLocaleDateString("bn-BD", {
  //   dateStyle: "full",
  // });
  return (
    <div className="bg-white">
      <nav className="w-7xl mx-auto">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-1">
            <div>
              <div className="bg-green-600 p-4 rounded-xl">
                <Image
                  src={"/logo-icon.png"}
                  width={18}
                  height={18}
                  alt="navlogo"
                ></Image>
              </div>
            </div>
            <div>
              <p className="text-2xl">বাজার দর</p>
              {/* <p className='text-sm text-gray-500'>{date}</p> */}
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img
                className="rounded-xl"
                alt="Avatar-component"
                src="https://img.daisyui.com/images/profile/demo/distracted1@192.webp"
              />
            </div>
          </div>
        </div>
        <div>
          <NavLinks></NavLinks>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
