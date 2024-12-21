import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import HomeRoutes from "./routes/HomeRoutes"
import DashboardRoutes from "./routes/DashboardRoutes"
import LoginPage from "./homePages/login&register/LoginPage"
import RegisterPage from "./homePages/login&register/RegisterPage"

export default function App() {
    return (
        <>
            <Router>
                <HomeRoutes />

                <DashboardRoutes />

                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/register" element={<RegisterPage />} />
                </Routes>
            </Router>
        </>
    )
}