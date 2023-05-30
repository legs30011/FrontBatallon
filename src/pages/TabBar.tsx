import { IonIcon, IonLabel, IonTabBar, IonTabButton } from "@ionic/react";
import { calendar, grid } from "ionicons/icons";
import React from "react";

export const TabBar: React.FC = () => {
  return (
    <IonTabBar slot="bottom">
      <IonTabButton tab="reportes" href="/reportes">
        <IonIcon icon={grid}></IonIcon>
        <IonLabel>Reportes</IonLabel>
      </IonTabButton>
      <IonTabButton tab="menu" href="/home">
        <IonIcon icon={grid}></IonIcon>
        <IonLabel>Menu</IonLabel>
      </IonTabButton>
      <IonTabButton tab="calendar" href="/calendario">
        <IonIcon icon={calendar}></IonIcon>
        <IonLabel>Calendario</IonLabel>
      </IonTabButton>
    </IonTabBar>
  );
};
