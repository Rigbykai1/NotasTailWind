import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoteSide from "./Notes/Note.side";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index="/Home" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Notes" element={<NoteSide />}></Route>
    </Routes>
  );
};

export default AppRoutes;
