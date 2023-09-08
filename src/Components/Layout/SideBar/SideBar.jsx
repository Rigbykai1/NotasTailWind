const SideBar = () => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer-3"
        className="drawer-overlay bg-current"
      ></label>
      <ul className="menu p-4 w-80 h-full bg-base-200">
        <li>
          <a href="/Home">Home</a>
        </li>
        <li>
          <a href="#">Working...</a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
