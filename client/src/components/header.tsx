import * as React from "react";
import { useDispatch } from "react-redux";
import { Link, redirect, useNavigate } from "react-router-dom";
import { logout } from "../store/reducers/userSlice";
import { useGetMyProfileQuery } from "../store/rtk-query/userApi";
import SearchBar from "./SearchBar";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { data: profileData, isLoading: profileLoading } = useGetMyProfileQuery({})

  const [showDropdown, setShowDropdown] = React.useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const onLogout = () => {
    dispatch(logout());
    redirect("/signin");
  };

  return (
    <header className="w-screen fixed z-30 pl-16 md:pl-[200px] border-b border-[#4A9DFF29]">
      <nav className="border-gray-200 pr-4 pl-2 lg:px-6 py-[20px] bg-white flex justify-between">
        <div
          className="px-2 relative"
        >
          <div className="text-black text-xs sm:text-base md:text-md font-serif absolute bg-white shadow-sm ">
            <SearchBar
              alwaysShowItems={false}
              onSelect={(item: any) => {
                navigate('/user/details/' + item?.id)
              }}
            />
          </div>
        </div>
        <Link
          to='/profile'>
          <div className="text-[13px] text-[#717171]">Logged in as</div>
          <div>{profileData?.firstName} {profileData?.lastName}</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
