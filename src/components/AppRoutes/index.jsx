import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes to="/" element={<MainLayout />}>
                {/* <Route to="" /> */}
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;