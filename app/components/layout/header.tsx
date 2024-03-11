"use client";
import Link from "next/link";
import Brand from "../brand/Brand";
import "./layout.css";
import { logout } from "@/app/login/action";
import { useRouter } from "next/navigation";
import Image from "next/image";

function Header() {
  const router = useRouter();

  function logoutFunc() {
    const session = logout();
    router.replace("/login");
  }

  function openProfile() {
    router.push("/profile");
  }

  return (
    <div className="navbar bg-purple-500 text-white w-full">
      {/* Brand name */}
      <div className="flex-1">
        <Link href={"/dashboard"}>
          <Brand size={20} textSize={20} className="btn btn-ghost text-xl" />
        </Link>
      </div>

      <div className="flex-none gap-2">
        {/* search */}
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>

        {/* drop down user icon */}
        <div className="dropdown dropdown-end text-black">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <Image src="/user.png" alt={""} width={50} height={50} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <button onClick={openProfile}>Profile</button>
            </li>

            <li>
              <button onClick={logoutFunc}>logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
