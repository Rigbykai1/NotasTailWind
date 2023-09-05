import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import ToDo from "./ToDo/ToDo";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index="/Home" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/ToDo" element={<ToDo />} />
    </Routes>
  );
};

export default AppRoutes;
