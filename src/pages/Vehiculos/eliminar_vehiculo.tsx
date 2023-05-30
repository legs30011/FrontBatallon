import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import mobiscroll from "@mobiscroll/react-lite";
import { chevronBackCircle } from "ionicons/icons";
import React from "react";
import { useSelector } from "react-redux";

import { List_Vehiculo } from "../../interfaces/IVehiculo";
import {
  useDeleteVehicleMutation,
  useGetAllVehicleQuery,
} from "../../slices/vehiculoSlice";
import { TabBar } from "./TabBar";
import "./eliminar_vehiculo.css";

export const EliminarVehiculo: React.FC = () => {
  const isSignedIn = useSelector((state) => !!state.session);
  const { data = [], isLoading, isSuccess } = useGetAllVehicleQuery();
  const [deleteVehicle] = useDeleteVehicleMutation();

  const onDeleteVehicle = async (vehicleId: string) => {
    await deleteVehicle(vehicleId);
  };

  let table;
  if (isLoading) {
    table = (
      <tr>
        <th>Loading...</th>
      </tr>
    );
  } else if (isSuccess) {
    table =
      data &&
      data.map((vehicle: List_Vehiculo) => (
        <tr key={vehicle._id}>
          <td>{vehicle.name}</td>
          <td>{vehicle.placa}</td>
          <td>{vehicle.chasis}</td>
          <td>
            <div className="mb-2">
              <IonButton
                style={{ display: "flex", width: "100%" }}
                color="danger"
                onClick={() => onDeleteVehicle(vehicle._id as string)}
              >
                Eliminar
              </IonButton>
            </div>
          </td>
        </tr>
      ));
  }
  return (
    <mobiscroll.Form className="md-grid-responsive">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/administrar_vehiculos">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>
          <TabBar></TabBar>
        </mobiscroll.FormGroupTitle>
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>
          Eliminar Vehiculo
        </h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Chassis</th>
                <th>Accion</th>
              </tr>
              {table}
            </thead>
          </table>
        </div>
      </mobiscroll.FormGroup>
    </mobiscroll.Form>
  );
};

export default EliminarVehiculo;
