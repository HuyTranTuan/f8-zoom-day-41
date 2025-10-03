import { HashRouter, Route, Routes } from "react-router-dom";
import MainLayout from "@/Layout/MainLayout";
import ProductDetail from "@/pages/ProductDetail";
import ProductList from "@/pages/ProductList";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="" element={<MainLayout />}>
                    <Route path="" element={<ProductList />} />
                    <Route path=":slug" element={<ProductDetail />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

export default AppRoutes;