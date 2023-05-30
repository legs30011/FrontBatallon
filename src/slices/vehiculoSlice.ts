import { axiosBaseQuery } from "../app/utils/api";
import { config } from "../app/utils/config";
import {  Ivehicle, IvehicleGet, List_Vehiculo, editVehiculo } from "../interfaces/IVehiculo";
import { createApi } from "@reduxjs/toolkit/query/react";

export const VehicleSlice = createApi({
  reducerPath: "vehicleApi",
  baseQuery: axiosBaseQuery({
    baseUrl: config.resourceServer.geoApiUrl ?? "http://localhost:3000/",
  }),
  tagTypes: ["Vehicles"],
  endpoints: (builder) => ({
    getAllVehicle: builder.query<List_Vehiculo[], void>({
      query: () => ({ url: "api/vehiculos", method: "get" }),
      providesTags: ["Vehicles"],
    }),

    postVehicle: builder.mutation({
      query: (vehicle: Ivehicle) => ({
        url: "api/vehiculos",
        method: "post",
        data: vehicle,
      }),
      invalidatesTags: ["Vehicles"],
    }),

    putVehicle: builder.mutation({
      query: (vehicle: editVehiculo) => ({
        url: `api/vehiculos/${vehicle._id}`,
        method: "put",
        data: vehicle,
      }),
      invalidatesTags: ["Vehicles"],
    }),
    
    deleteVehicle: builder.mutation({
      query: (id: string) => ({ url: `api/vehiculos/${id}`, method: "delete" }),
      invalidatesTags: ["Vehicles"],
    }),
  }),
});

export const {
  useGetAllVehicleQuery,
  usePostVehicleMutation,
  usePutVehicleMutation,
  useDeleteVehicleMutation,
} = VehicleSlice;
