import React, { Suspense } from 'react';
import { createBrowserRouter } from "react-router";
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import LoadingScreen from '../pages/LoadingScreen/LoadingScreen';
import AppsSection from '../pages/AppsSection/AppsSection';
import InstallationPage from '../pages/InstallationPage/InstallationPage';

const appDataPromise = fetch("/appsData.json").then(res => res.json())
export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        children: [
            {
                index: true,
                element: <Suspense fallback={<LoadingScreen></LoadingScreen>}>
                    <Home appDataPromise={appDataPromise}></Home>
                </Suspense>
            },
            {
                path: '/apps',
                element: <Suspense fallback={<LoadingScreen></LoadingScreen>}>
                    <AppsSection appDataPromise={appDataPromise}></AppsSection>
                </Suspense>
            },
            {
                path: '/installation',
                element: <Suspense fallback={<LoadingScreen></LoadingScreen>}>
                    <InstallationPage appDataPromise={appDataPromise}></InstallationPage>
                </Suspense>
            }
        ]
    },
    {

    }
]);


