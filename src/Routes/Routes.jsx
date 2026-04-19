import React from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                loader: () => fetch("/appsData.json"),
                Component: Home
            },
            {
                path: '/apps',
                element: <div>ki je kori</div>
            }
        ]
    },
    {

    }
]);


