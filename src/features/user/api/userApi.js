import { createApi } from "@reduxjs/toolkit/query/react";
import baseUrl from "../../../app/hook.js";

export const userApi = createApi({
	reducerPath: "userApi",
	baseQuery: baseUrl,
	endpoints: (builder) => ({
		userIndex: builder.query({
			query: () => ({
				url: `user`,
				method: "GET",
			}),
			providesTags: ["userList"],
		}),
		userShow: builder.query({
			query: (id) => ({
				url: `user/${id}`,
				method: "GET",
			}),
			providesTags: ["userList"],
		}),
		userStore: builder.mutation({
			query: (data) => ({
				url: "user",
				method: "POST",
				body: data,
			}),
			invalidatesTags: ["userList"],
		}),
		userUpdate: builder.mutation({
			query: ({ data, id }) => ({
				url: `user/${id}`,
				method: "PATCH",
				body: data,
			}),
			invalidatesTags: ["userList"],
		}),
		userDelete: builder.mutation({
			query: (id) => ({
				url: `user/${id}`,
				method: "DELETE",
			}),
			invalidatesTags: ["userList"],
		}),
	}),
});

export const {
	useUserIndexQuery,
	useUserShowQuery,
	useUserStoreMutation,
	useUserUpdateMutation,
	useUserDeleteMutation,
} = userApi;
