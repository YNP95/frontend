import { createBrowserRouter } from 'react-router-dom';
import Root from './root';
import LoginPage from '../pages/Login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />
    },
    {
        path: "/login",
        element: <LoginPage />
    },
    {
        path: '/main',
        element: <div>메인 페이지 입니다.</div>
    }
])

export default router;