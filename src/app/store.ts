import { UsuarioSlice } from "../slices/usuarioSlice";
import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { VehicleSlice } from "../slices/vehiculoSlice";
import { AdminSlice } from "../slices/adminSlice";
import { SancionSlice } from "../slices/sancionSlice";

export const store = configureStore({
  reducer: {
    [UsuarioSlice.reducerPath]: UsuarioSlice.reducer,
    [VehicleSlice.reducerPath]: VehicleSlice.reducer,
    [AdminSlice.reducerPath]: AdminSlice.reducer,
    [SancionSlice.reducerPath]: SancionSlice.reducer,
    //[SancionSlice.reducerPath]: SancionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(UsuarioSlice.middleware)
      .concat(AdminSlice.middleware)
      .concat(VehicleSlice.middleware)
      .concat(SancionSlice.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppTunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
