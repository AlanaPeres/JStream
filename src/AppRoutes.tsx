import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { Homepage } from "./pages/HomePage/HomePage";

export const AppRoutes = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registrar" element={<SignUpPage />} />
                <Route path="/saldo" element={<SaldoPage />} />
            </Routes>
        </Router>
    )
}
