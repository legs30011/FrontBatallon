import { axiosBaseQuery } from "../app/utils/api";
import { config } from "../app/utils/config";
import { ISancion, ISancion2 } from "../interfaces/ISancion";
import { createApi } from "@reduxjs/toolkit/query/react";


export const SancionSlice = createApi({
  reducerPath: "sancionApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.resourceServer.geoApiUrl ?? "http://localhost:3000/",
  }),
  tagTypes: ["Sancion"],
  endpoints: (builder) => ({
    getAllSancion: builder.query<ISancion2[], void>({
      query: () => ({ url: "api/sancion", method: "GET" }),
      providesTags: ["Sancion"],
    }),
    postSancion: builder.mutation({
      query: (sancion: ISancion2) => ({
        url: "api/sancion",
        method: "post",
        data: sancion,
      }),
      invalidatesTags: ["Sancion"],
    }),
    putSancion: builder.mutation({
      query: (sancion: ISancion) => ({
        url: `api/sancion/${sancion.id}`,
        method: "put",
        data: sancion,
      }),
      invalidatesTags: ["Sancion"],
    }),
    deleteSancion: builder.mutation({
      query: (id: string) => ({ url: `api/sancion/${id}`, method: "delete" }),
      invalidatesTags: ["Sancion"],
    }),
  }),
});

export const {
  useGetAllSancionQuery,
  usePostSancionMutation,
  usePutSancionMutation,
  useDeleteSancionMutation,
} = SancionSlice;
