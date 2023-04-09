import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { TransferenciaPage } from "./pages/transferenciaPage/transferenciaPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/registrar" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/saldo" element={<SaldoPage />} />
                <Route path="/transferencia" element={<TransferenciaPage />} />
            </Routes>
        </Router>
    )
}
