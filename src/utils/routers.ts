import CustomerPage from "../pages/Customers/Customers"
import Dashboard from "../pages/Dashboard"
import { Login } from "../pages/auth/Login"
import { NotFound } from "../pages/notfound"

const routers = [
    {
        path: '/',
        exact: false,
        main: Dashboard
    },
    {
        path: '/notfound',
        exact: false,
        main: NotFound
    },
    {
        path: '/login',
        exact: true,
        main: Login
    },
    {
        path: '/customer',
        exact: false,
        main: CustomerPage
    }
]

export default routers