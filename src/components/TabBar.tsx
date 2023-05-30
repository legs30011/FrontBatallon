import {  IonContent, IonFooter, IonHeader,  IonIcon,  IonLabel,  IonPage, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import { albums, calendar, grid } from 'ionicons/icons';
import React from 'react';


export const TabBar: React.FC = () => {
    return(
        <IonTabBar slot="bottom">
            <IonTabButton tab='dashboard' href="/reportes">
                <IonIcon icon={albums}></IonIcon>
                <IonLabel>Reportes</IonLabel>
            </IonTabButton>
            <IonTabButton tab='menu' href="/home">
                <IonIcon icon={grid}></IonIcon>
                <IonLabel>Menu</IonLabel>
            </IonTabButton>
            <IonTabButton tab='calendar' href="/calendario">
                <IonIcon icon={calendar}></IonIcon>
                <IonLabel>Calendario</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )

}