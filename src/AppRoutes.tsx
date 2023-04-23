import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { Homepage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { SignUpPage } from "./pages/SignUpPage/SignUpPage";
import { TransferenciaPage } from "./pages/transferenciaPage/transferenciaPage";
import { SaldoPage } from "./pages/saldoPage/saldoPage";
import { StatementPage } from "./pages/extractPage";
import { UserPageData } from "./pages/UserPage/UserPage";
import axios from "axios";

export const AppRoutes = () => {
    axios.get('http://localhost:7079/Clientes').then(data => console.log(data))
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="/registrar" element={<SignUpPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/saldo" element={<SaldoPage />} />
                <Route path="/transferencia" element={<TransferenciaPage />} />
                <Route path="/extrato" element={<StatementPage />} />
                <Route path="/perfil" element={<UserPageData />} />
            </Routes>
        </Router>
    )
}
