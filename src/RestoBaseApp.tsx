import { RouterProvider } from "react-router"
import { appRouter } from "./routes/app.router"
import './index.css'

const RestoBaseApp = () => {
    return (
        <>
            <RouterProvider router={appRouter} />
        </>
    )
}

export default RestoBaseApp
