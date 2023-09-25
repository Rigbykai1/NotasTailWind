import { useState } from "react";
import { MdWbSunny, MdModeNight, MdDensityMedium } from "react-icons/md";
const NavBar = ({ switchColor, colorMode }) => {
  const [session, setSession] = useState(false);
  return (
    <div className="w-full navbar bg-base-300/50 fixed z-50 backdrop-blur-sm">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <MdDensityMedium className="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/Home">
          Notas
        </a>
      </div>
      <div className="flex-2 space-x-2">
        <label className="swap swap-rotate btn btn-square btn-ghost">
          <input
            type="checkbox"
            checked={colorMode === "corporate"}
            onChange={switchColor}
          />
          <MdWbSunny className="swap-off fill-current w-6 h-6" />
          <MdModeNight className="swap-on fill-current w-6 h-6" />
        </label>
        <div>
          {session ? (
            <>
              <div className="dropdown dropdown-end">
                <div
                  className="avatar online btn btn-ghost rounded-full"
                  tabIndex={0}
                >
                  <div className="w-10 rounded-full">
                    <img src="https://avatars.githubusercontent.com/u/129445798?v=4" />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu dropdown-content z-[1] p-2 shadow bg-base-200 rounded-box w-52 mt-4"
                >
                  <li>
                    <a>settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <a
                className="avatar placeholder btn btn-ghost rounded-full"
                href="/login"
              >
                <div className="w-10 rounded-full">
                  <span>Login</span>
                </div>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
