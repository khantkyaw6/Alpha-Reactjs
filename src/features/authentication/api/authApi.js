import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook.js";

export const authApi = createApi({
	reducerPath: "authApi",
	baseQuery: baseUrl,
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: "auth/login",
				method: "POST",
				body: data,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: "auth/register",
				method: "Post",
				body: data,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
