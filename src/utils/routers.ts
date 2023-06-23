import { Periodicdata } from "pages/Periodicdata"
import { Control } from "../pages/Control"
import { DashBoard } from "../pages/Dashboard"
import { NotFound } from "../pages/notfound"
import { DataFirst } from "pages/DataFirst"
import { Excel } from "pages/Excel"

const routers = [
    {
        path: '/',
        exact: false,
        main: DashBoard
    },
    {
        path: '/datafirst',
        exact: false,
        main: DataFirst
    },
    {
        path: '/notfound',
        exact: false,
        main: NotFound
    },
    {
        path: '/excel',
        exact: false,
        main: Excel
    },
    {
        path: '/controlresults',
        exact: false,
        main: Control
    },
    {
        path: '/periodicdata',
        exact: false,
        main: Periodicdata
    }
]

export default routers