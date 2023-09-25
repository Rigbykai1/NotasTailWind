import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import NoteSide from "./Notes/Note.side";
import Login from "./Login/Login";
import SignIn from "./SignIn/SignIn";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index="/Home" element={<Home />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Notes" element={<NoteSide />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/SignIn" element={<SignIn />} />
    </Routes>
  );
};

export default AppRoutes;
