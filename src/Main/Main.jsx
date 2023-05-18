
import { Outlet } from 'react-router-dom';
import NavigationBer from '../pages/Shared/NavigationBer/NavigationBer';

const Main = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;