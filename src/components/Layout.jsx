import Header from './Header/Header';
import Foot from './Foot/Foot';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Foot />
        </div>
    );
};

export default Layout;