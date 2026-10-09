import Image from "next/image";
import NavLinks from "./NavLinks";
import DateTime from "./homepage/DateTime";
import Link from "next/link";
import  Avatar  from "@/app/components/Avatar";


const Navbar = () => {
  return (
    <div className="bg-white">
      <nav className="w-7xl mx-auto">
        <div className="flex justify-between items-center py-2">
          <div className="flex gap-1">
            <div>
              <Link href={'/'}>
              <div className="bg-green-600 p-4 rounded-xl">
                <Image
                  src={"/logo-icon.png"}
                  width={18}
                  height={18}
                  alt="navlogo"
                ></Image>
              </div>
              </Link>
            </div>
            <div>
              <p className="text-2xl font-semibold">বাজার দর</p>
              <div className="text-gray-700">
              <DateTime></DateTime>
              </div>
            </div>
          </div>
{/* Avatar Section */}
    <Avatar></Avatar>
        </div>
        <div>
          <NavLinks></NavLinks>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

<div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex gap-2">
    <input type="text" placeholder="Search" className="input w-24 md:w-auto" />
    
  </div>
</div>