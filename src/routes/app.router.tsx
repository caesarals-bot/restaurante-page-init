import { createBrowserRouter } from "react-router";
import HomePage from '../restaurant/pages/home/HomePage';
import MenuPage from "../restaurant/pages/menu/MenuPage";
import LocationsPage from "../restaurant/pages/locations/LocationsPage";
import ContactPage from "../restaurant/pages/contact/ContactPage";
import AboutPage from "../restaurant/pages/about/AboutPage";
import AdminPage from "../admin/page/AdminPage";
import RestaurantLayout from "../restaurant/layouts/RestaurantLayout";
import AdminLayouts from "../admin/layouts/AdminLayouts";


export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <RestaurantLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: "menu",
                element: <MenuPage />
            },
            {
                path: "locations",
                element: <LocationsPage />
            },
            {
                path: "contact",
                element: <ContactPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
        ]
    },

    {
        path: "/admin",
        element: <AdminLayouts />,
        children: [
            {
                index: true,
                element: <AdminPage />
            },
        ]
    },
])