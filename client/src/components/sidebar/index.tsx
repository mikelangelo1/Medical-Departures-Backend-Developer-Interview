import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";


import { useDispatch } from "react-redux";
import { logout } from "../../store/reducers/userSlice";

import { redirect } from "react-router-dom";
import Logo from "../Logo";
import { useGetMyProfileQuery } from "../../store/rtk-query/userApi";

import * as TsSvgs from '../../assets/tsSvgs'
import { TsSvgProps } from "../../@types/appTypes";

const menuItems1 = [
  {
    title: "Visits",
    getIcon: (props: TsSvgProps) => <TsSvgs.HomeIcon {...props} />,
    link: "/visits",
    hasSubmenu: false,
  },
  {
    title: "User",
    getIcon: (props: TsSvgProps) => <TsSvgs.UserIcon {...props} />,
    link: "/users",
    hasSubmenu: true,
  },
  {
    title: "Billings",
    getIcon: (props: TsSvgProps) => <TsSvgs.BillingIcon {...props} />,
    link: "/billings",
    hasSubmenu: true,
  },
];


const SideBar = () => {
  // const { data: profileData } = useGetMyProfileQuery({})
  const dispatch = useDispatch();

  const location = useLocation()

  const onLogout = () => {
    dispatch(logout());
    redirect("/signin");
  };


  let items2: typeof menuItems1 = [
    {
      title: "Settings",
      getIcon: (props: TsSvgProps) => {
        return props.strokecolor ? <TsSvgs.SettingsFilledIcon {...props} /> : <TsSvgs.SettingsIcon {...props} />
      },
      link: "/settings",
      hasSubmenu: true,
    },
  ];

  const checkIsActive = (route: string) => {
    //for home
    if (location.pathname == '/') {
      if (route !== '/') return false
    }

    let isActive = location.pathname.includes(route);

    return isActive
  }


  const renderMenuItems = () => {
    return (
      <div
        className={
          " flex flex-col items-center w-16 sm:w-[200px] h-full overflow-hidden text-gray-400 transition"
        }
      >
        <div className="w-[fit-content] px-2 h-[80px] flex items-center">
          <Logo />
        </div>
        <div className="w-full px-[30px] mt-[23px]">
          <div className="text-[#D1D1D1]">Main</div>
          <div className="flex flex-col items-center w-full ">
            {menuItems1.map((item, index) => {
              const customIsActive = checkIsActive(item.link)
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) => {
                    return `flex items-center w-full h-10 mt-1 rounded active:text-medify-blue hover:text-gray-700 ${isActive && "text-medify-blue "
                      }`;
                  }}
                >
                  <div className="w-[30px] h-[20px] ">
                    {item.getIcon({
                      ...(customIsActive && { strokecolor: '#1A2DD8' })
                    })}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">
                    {item.title}
                  </span>

                </NavLink>
              );
            })}
          </div>
          <div className="text-[#D1D1D1] mt-[40%]">Settings</div>
          <div className="flex flex-col items-center w-full ">
            {items2.map((item, index) => {
              const customIsActive = checkIsActive(item.link)
              return (
                <NavLink
                  to={item.link}
                  key={index}
                  className={({ isActive }) => {
                    return ` flex items-center w-full h-10 mt-1 rounded active:text-medify-blue hover:text-gray-700 ${isActive && "text-medify-blue "
                      }`;
                  }}
                >
                  <div className="w-[30px] h-[20px] ">
                    {item.getIcon({
                      ...(customIsActive && { strokecolor: '#1A2DD8' })
                    })}
                  </div>
                  <span className="hidden sm:inline text-sm font-medium">
                    {item.title}
                  </span>

                </NavLink>
              );
            })}
            <button
              onClick={onLogout}
              className="flex items-center w-full h-10 mt-1 "
            >
              <div className="w-[30px] h-[20px] ">
                <TsSvgs.LogoutIcon />
              </div>
              <span className="hidden sm:inline  text-sm font-medium">
                Logout
              </span>
            </button>
          </div>
        </div>

      </div>
    );
  };
  return <div className="z-40 bg-white fixed top-0 bottom-0 border-[#4A9DFF29] border">{renderMenuItems()}</div>;
};

export default SideBar;
