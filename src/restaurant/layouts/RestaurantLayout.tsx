import { Outlet } from "react-router"
import Navbar from "../../components/navigation/Navbar"

const RestaurantLayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />            
        </div>
    )
}

export default RestaurantLayout
