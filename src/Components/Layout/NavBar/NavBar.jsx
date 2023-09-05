import { MdWbSunny, MdModeNight, MdDensityMedium } from "react-icons/md";
const NavBar = ({ switchColor, colorMode }) => {
  return (
    <div className="w-full navbar bg-base-300/50 fixed z-50 backdrop-blur-sm">
      <div className="flex-none">
        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
          <MdDensityMedium className="inline-block w-6 h-6 stroke-current" />
        </label>
      </div>
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl" href="/Home">Notas</a>
      </div>
      <div className="flex-2">
        <label className="swap swap-rotate btn btn-square btn-ghost">
          <input
            type="checkbox"
            checked={colorMode === "corporate"}
            onChange={switchColor}
          />
          <MdWbSunny className="swap-off fill-current w-6 h-6" />
          <MdModeNight className="swap-on fill-current w-6 h-6" />
        </label>
      </div>
    </div>
  );
};

export default NavBar;
