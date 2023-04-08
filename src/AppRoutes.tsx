import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/homePage/homePage";
import { LoginPage } from "./pages/loginPage/loginPage";
import SignUp from "./pages/SignUpPage/signUpPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";
import { StatementPage } from "./pages/extractPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="registrar" element={<SignUp />} />
        <Route path="/saldo" element={<SaldoPage />} />
        <Route path="/extrato" element={<StatementPage />} />
      </Routes>
    </Router>
  );
};
