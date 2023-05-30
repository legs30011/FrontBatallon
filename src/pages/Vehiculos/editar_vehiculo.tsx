import React from "react";
import {
  IonHeader,
  IonButton,
  IonButtons,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import { chevronBackCircle } from "ionicons/icons";
import mobiscroll from "@mobiscroll/react-lite";
import { TabBar } from "./TabBar";
import { List_Vehiculo, editVehiculo } from "../../interfaces/IVehiculo";
import {
  useGetAllVehicleQuery,
  usePutVehicleMutation,
} from "../../slices/vehiculoSlice";
import "./editar.css";

export const EditarVehiculo: React.FC = () => {
  const { data = [], isLoading, isSuccess } = useGetAllVehicleQuery();
  const [editarVehiculo] = usePutVehicleMutation();

  const handleEditClick = async (vehiculo: editVehiculo) => {
    await editarVehiculo(vehiculo);
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
      data.map((vehiculo: List_Vehiculo) => (
        <tr key={vehiculo._id}>
          <td>{vehiculo.name}</td>
          <td>{vehiculo.placa}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.chasis}</td>
          <td>{vehiculo.status}</td>
          <td>
            <div className="mb-2">
              <IonButton
                style={{ display: "flex", width: "100%" }}
                color="danger"
                href={`/EditVehiculo/${vehiculo._id}`}
              >
                Editar
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
          <h2 style={{ textAlign: "center", margin: "0 auto" }}>
            Editar Vehiculo
          </h2>
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>
          <TabBar></TabBar>
        </mobiscroll.FormGroupTitle>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Modelo</th>
                <th>Placa</th>
                <th>Marca</th>
                <th>Numero de Chasis</th>
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

export default EditarVehiculo;
