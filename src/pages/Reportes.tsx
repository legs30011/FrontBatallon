import React from "react";
import mobiscroll from "@mobiscroll/react-lite";

import { TabBar } from "./TabBar";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import { chevronBackCircle, printOutline } from "ionicons/icons";
import { useGetAllSancionQuery } from "../slices/sancionSlice";
import { ISancion2 } from "../interfaces/ISancion";
import "./Reportes.css";

export const Reportes: React.FC = () => {
  const { data = [], isLoading, isSuccess } = useGetAllSancionQuery();
  let table;
  if (isLoading) {
    table = (
      <tr>
        <td colSpan={parseInt("cargando")}></td>
      </tr>
    );
  } else if (isSuccess) {
    table =
      data &&
      data.map((sancion: ISancion2) => (
        <tr key={sancion._id}>
          <td>{sancion.name}</td>
          <td>{sancion.rango}</td>
          <td>{sancion.cel}</td>
          <td>{sancion.status}</td>
          <td>{sancion.descripcion}</td>
        </tr>
      ));
  }

  const handlePrint = () => {
    window.print();
  };

  return (
    <mobiscroll.Form className="md-grid-responsive">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/home">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>
          <TabBar></TabBar>
        </mobiscroll.FormGroupTitle>
        <h2>Tabla de Reportes</h2>
        <IonButtons slot="end">
          <IonButton onClick={handlePrint}>
            <IonIcon icon={printOutline} slot="start" />
            Imprimir
          </IonButton>
        </IonButtons>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Conductor</th>
                <th>Rango</th>
                <th>Celular</th>
                <th>Status</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </mobiscroll.FormGroup>
    </mobiscroll.Form>
  );
};

export default Reportes;
