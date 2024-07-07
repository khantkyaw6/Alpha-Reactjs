import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const url = "http://localhost:3000/";

const baseUrl = fetchBaseQuery({
	baseUrl: url,
	// prepareHeaders: async (headers, { _ }) => {
	// 	const user = await getLocalStorage("user");
	// 	if (user) {
	// 		headers.set("Authorization", `Bearer ${user.token}`);
	// 		headers.set("Cache-Control", "no-cache");
	// 	}
	// 	return headers;
	// },
});

export default baseUrl;
