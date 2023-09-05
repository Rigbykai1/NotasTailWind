import { useState, useEffect } from "react";
import Footer from "./Components/Layout/Footer/Footer";
import NavBar from "./Components/Layout/NavBar/NavBar";
import SideBar from "./Components/Layout/Sidebar/Sidebar";
import AppRoutes from "./Pages/AppRoutes";

function App() {
  const [colorMode, setColorMode] = useState(
    localStorage.getItem("theme") ?? "business"
  );
  const switchColor = (event) => {
    if (event.target.checked) {
      setColorMode("corporate");
    } else {
      setColorMode("business");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", colorMode);
    document.querySelector("html")?.setAttribute("data-theme", colorMode);
  }, [colorMode]);

  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <NavBar switchColor={switchColor} colorMode={colorMode} />
        <div className="pt-16">
          <AppRoutes />
        </div>
        <Footer />
      </div>
      <SideBar />
      <SideBar></SideBar>
    </div>
  );
}

export default App;
