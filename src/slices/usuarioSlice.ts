import { axiosBaseQuery } from "../app/utils/api";
import { config } from "../app/utils/config";
import { IUsuario, IUsuario2 } from "../interfaces/IUsuario";
import { createApi } from "@reduxjs/toolkit/query/react";

const initialState: IUsuario = {
  _id: "",
  name: "",
  edad: "",
  rango: "",
  cel: "",
  genero: "",
  status: "",
};

export const UsuarioSlice = createApi({
  reducerPath: "usuarioApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.resourceServer.geoApiUrl ?? "http://localhost:3000/",
  }),
  tagTypes: ["Usuario"],
  endpoints: (builder) => ({
    getAllUsers: builder.query<IUsuario[], void>({
      query: () => ({ url: "api/users", method: "GET" }),
      providesTags: ["Usuario"],
    }),
    postUser: builder.mutation({
      query: (user: IUsuario2) => ({
        url: "api/users",
        method: "post",
        data: user,
      }),
      invalidatesTags: ["Usuario"],
    }),
    putUser: builder.mutation({
      query: (user: IUsuario) => ({
        url: `api/users/${user._id}`,
        method: "put",
        data: user,
      }),
      invalidatesTags: ["Usuario"],
    }),
    deleteUser: builder.mutation({
      query: (id: string) => ({ url: `api/users/${id}`, method: "delete" }),
      invalidatesTags: ["Usuario"],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  usePostUserMutation,
  usePutUserMutation,
  useDeleteUserMutation,
} = UsuarioSlice;
