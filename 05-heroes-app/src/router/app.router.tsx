import AdminPage from "@/admin/pages/AdminPage";
import AdminLayouts from "@/admin/pages/layouts/AdminLayouts";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import { HeroLayouts } from "@/heroes/pages/hero/layouts/HeroLayouts";
import { HomePage } from "@/heroes/pages/home/HomePage";

import { lazy } from "react";
/* import SearchPage from "@/heroes/pages/search/SearchPage"; */
import { createBrowserRouter, Navigate } from "react-router";


const SearchPage = lazy( () => import('@/heroes/pages/search/SearchPage'));



export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <HeroLayouts />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
            {
                path: '/heroes/:idSlug',
                element: <HeroPage />
            },
            {
                path: '/search',
                element: <SearchPage />
            },
            {
                path:'*',
                element: <Navigate to='/' />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayouts/>,
        children:[
            {
                index:true,
                element: <AdminPage/>
            }
        ]
    }
])