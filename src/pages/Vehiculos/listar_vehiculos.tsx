import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import "./listar_vehiculos.css";
import { TabBar } from "./TabBar";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonLabel,
  IonToolbar,
} from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import { List_Vehiculo } from "../../interfaces/IVehiculo";
import { useGetAllVehicleQuery } from "../../slices/vehiculoSlice";

export const Listar_Vehiculos: React.FC = () => {
  const { data = [], isLoading, isSuccess } = useGetAllVehicleQuery();
  let table;
  if (isLoading) {
    table = "Cargando...";
  } else if (isSuccess) {
    table =
      data &&
      data.map((usuario: List_Vehiculo) => (
        <tr key={usuario._id}>
          <th>{usuario.name}</th>
          <th>{usuario.placa}</th>
          <th>{usuario.marca}</th>
          <th>{usuario.chasis}</th>
          <th>{usuario.status}</th>
          <IonLabel>
            <IonButton
              className="map"
              expand="block"
              color="medium"
              onClick={() =>
                (window.location.href =
                  "https://main--vehiculobatallon.netlify.app/")
              }
            >
              Mapa
            </IonButton>
          </IonLabel>
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
        <h2> Tabla de Vehiculos</h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Marca</th>
                <th>Numero de Chassis</th>
                <th>Estado</th>
                <th>Seguimiento</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </mobiscroll.FormGroup>
    </mobiscroll.Form>
  );
};

export default Listar_Vehiculos;
