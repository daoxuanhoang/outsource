import { Control } from "../pages/Control"
import { DashBoard } from "../pages/Dashboard"
import { NotFound } from "../pages/notfound"

const routers = [
    {
        path: '/',
        exact: false,
        main: DashBoard
    },
    {
        path: '/notfound',
        exact: false,
        main: NotFound
    },
    {
        path: '/control',
        exact: false,
        main: Control
    }
]

export default routers