import {
  IonButton,
  IonButtons,
  IonContent,
  IonDatetime,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import "./calendario.css";
import { TabBar } from "../components/TabBar";
import { chevronBackCircle } from "ionicons/icons";

export const Calendario: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/home">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Calendario</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonDatetime
              style={{ display: "flex", width: "100%" }}
              locale="es-ES"
            >
              <span
                style={{ display: "flex", width: "100%" }}
                slot="time-label"
              >
                Tiempo
              </span>
            </IonDatetime>
          </IonToolbar>
        </IonHeader>
      </IonContent>
      <TabBar></TabBar>
    </IonPage>
  );
};

export default Calendario;
