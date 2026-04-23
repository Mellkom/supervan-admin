import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

function MainLayout() {
    return (
        <>
            <Sidebar />
            <Header />
            <Outlet />
        </>
    );
}

export default MainLayout;
