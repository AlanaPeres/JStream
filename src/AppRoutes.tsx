import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { StatementPage } from "./pages/extractPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";
import { Homepage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/loginPage/LoginPage";

export const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registrar" element={<SignUpPage />} />
        <Route path="/saldo" element={<SaldoPage />} />
        <Route path="/extrato" element={<StatementPage />} />
      </Routes>
    </Router>
  );
};
