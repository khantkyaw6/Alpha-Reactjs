import React from "react";
import { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Login = lazy(() => import("../../components/authentication/login"));
const Register = lazy(() => import("../../components/authentication/register"));
const AppLayout = lazy(() => import("../../components/layouts"));
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage404 from "../../components/error-pages/404";
import LoadingFallback from "../../components/common/loading-fallback";
import User from "../../components/user";

const Router = () => {
	const config = createBrowserRouter([
		{
			path: "/login",
			element: (
				<PrivateRoutes>
					<Suspense fallback={<LoadingFallback />}>
						<Login />
					</Suspense>
				</PrivateRoutes>
			),
		},
		{
			path: "/register",
			element: (
				<PrivateRoutes>
					<Suspense fallback={<LoadingFallback />}>
						<Register />
					</Suspense>
				</PrivateRoutes>
			),
		},
		{
			path: "/",
			element: (
				<PrivateRoutes>
					<Suspense fallback={<LoadingFallback />}>
						<AppLayout />
					</Suspense>
				</PrivateRoutes>
			),
			children: [
				{
					path: "/user",
					element: <User />,
				},
			],
		},
		{
			path: "/*",
			element: <ErrorPage404 />,
		},
	]);
	return <RouterProvider router={config} />;
};

export default Router;
