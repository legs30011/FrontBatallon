import React from "react";

import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import { TabBar } from "./TabBar";
import "./administrar_usuarios.css";

const AdministrarUsuario: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/home">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="title">Conductores</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <div className="main-content">
          <nav className="nav">
            <IonButton
              className="nav-link"
              href="/listar_usuarios"
              expand="block"
              color={"medium"}
            >
              Listar Conductores
            </IonButton>

            <IonButton
              className="nav-link"
              href="/añadir_usuario"
              expand="block"
              color={"medium"}
            >
              Añadir Conductor
            </IonButton>

            <IonButton
              className="nav-link"
              href="/eliminar_usuario"
              expand="block"
              color={"medium"}
            >
              Eliminar Conductor
            </IonButton>

            <IonButton
              className="nav-link"
              href="/editar_usuario"
              expand="block"
              color={"medium"}
            >
              Editar Conductor
            </IonButton>
          </nav>
        </div>
      </IonContent>

      <TabBar />
    </IonPage>
  );
};

export default AdministrarUsuario;
