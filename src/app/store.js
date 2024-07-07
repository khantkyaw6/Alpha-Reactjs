import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../features/user/api/userApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../features/authentication/api/authApi";

export const store = configureStore({
	reducer: {
		[authApi.reducerPath]: authApi.reducer,
		[userApi.reducerPath]: userApi.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat([userApi.middleware, authApi.middleware]),
});

setupListeners(store.dispatch);
