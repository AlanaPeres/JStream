import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/homePage/homePage";
import SignUp from "./pages/SignUp/signUp";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/registrar" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    );
  }