import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
/* import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ResetPasswordRequest from "./pages/ResetPassword/ResetPasswordRequest";
import ResetPasswordSent from "./pages/ResetPassword/ResetPasswordSent";
import ResetPasswordNew from "./pages/ResetPassword/ResetPasswordNew"; */

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} /> */}

      {/* Flujo de reset de contraseña */}
      {/* <Route path="/reset-password" element={<ResetPasswordRequest />} />
      <Route path="/reset-password/sent" element={<ResetPasswordSent />} />
      <Route path="/reset-password/new" element={<ResetPasswordNew />} /> */}

      {/* Catch-all → si la ruta no existe, redirige a Home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
