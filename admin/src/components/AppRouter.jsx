import { routes } from "../services/routes";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import { LOGIN } from "../services/consts";

function AppRouter() {
    return(
        <Routes>
            {routes.filter(route => route.path === LOGIN).map((route, index) => (
                <Route key={`login-${index}`} path={route.path} element={<route.element />} />
            ))}

            <Route element={<MainLayout />}>
                {routes.filter(route => route.path !== LOGIN).map((route, index) => (
                    <Route key={index} path={route.path} element={<route.element />} />
                ))}
            </Route>
        </Routes>
    )
}

export default AppRouter;