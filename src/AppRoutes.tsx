import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";

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
