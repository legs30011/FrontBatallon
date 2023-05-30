import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router";
import { TabBar } from "../../components/TabBar";
import "./administrar_vehiculos.css";

export const Administrar_Vehiculo: React.FC = () => {
  return (
    <IonPage class=".ion-float-justify">
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton href="/home">
                <IonIcon icon={chevronBackCircle}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Vehiculos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonToolbar className="contenido">
            <IonLabel>
              <IonButton
                className="animacion contenido_opcion"
                href="/listar_vehiculos"
                expand="block"
                color={"medium"}
              >
                <span>Listar Vehiculos</span>
              </IonButton>
            </IonLabel>
            <TabBar></TabBar>
            <IonLabel>
              <IonButton
                className="animacion contenido_opcion"
                href="/anadir_vehiculo"
                expand="block"
                color={"medium"}
              >
                <span>Añadir Vehiculos</span>
              </IonButton>
            </IonLabel>
            <TabBar></TabBar>
            <IonLabel>
              <IonButton
                className="animacion contenido_opcion"
                href="/eliminar_vehiculo"
                expand="block"
                color={"medium"}
              >
                <span>Eliminar Vehiculo</span>
              </IonButton>
            </IonLabel>
            <IonLabel>
              <IonButton
                className="animacion contenido_opcion"
                href="/editar_vehiculo"
                expand="block"
                color={"medium"}
              >
                <span>Editar Vehiculo</span>
              </IonButton>
            </IonLabel>
          </IonToolbar>
        </IonContent>
        <TabBar></TabBar>
      </IonPage>
    </IonPage>
  );
};

export default Administrar_Vehiculo;
