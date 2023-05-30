import { axiosBaseQuery } from "../app/utils/api";
import { config } from "../app/utils/config";
import { createApi } from "@reduxjs/toolkit/query/react";
import { iAdmin } from "../interfaces/IAdmin";

export const AdminSlice = createApi({
  reducerPath: "adminApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.resourceServer.geoApiUrl ?? "http://localhost:3000/",
  }),
  tagTypes: ["Admins"],
  endpoints: (builder) => ({
    getAllAdmins: builder.query<iAdmin[], void>({
      query: () => ({ url: "api/admins", method: "GET" }),
      providesTags: ["Admins"],
    }),
    postAdmins: builder.mutation({
      query: (admin: iAdmin) => ({
        url: "api/admins",
        method: "post",
        data: admin,
      }),
      invalidatesTags: ["Admins"],
    }),
    putAdmins: builder.mutation({
      query: (admin: iAdmin) => ({
        url: `api/admins/${admin._id}`,
        method: "put",
        data: admin,
      }),
      invalidatesTags: ["Admins"],
    }),
    deleteAdmins: builder.mutation({
      query: (id: string) => ({ url: `api/admins/${id}`, method: "delete" }),
      invalidatesTags: ["Admins"],
    }),
  }),
});

export const {
  useGetAllAdminsQuery,
  usePostAdminsMutation,
  usePutAdminsMutation,
  useDeleteAdminsMutation,
} = AdminSlice;
