import React, { useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonIcon,
  IonList,
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

import { usePostAdminsMutation } from "../slices/adminSlice";
import { iAdmin } from "../interfaces/IAdmin";

export const Registrarse: React.FunctionComponent = () => {
  const [user_name, setUserN] = useState<string>("");
  const [contraseña, setContraseña] = useState<string>("");
  const [c_contraseña, setCContraseña] = useState<string>("");
  const [addAdmin] = usePostAdminsMutation();
  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const newAdmin: iAdmin = {
      user_name,
      contraseña,
      c_contraseña,
    };
    await addAdmin(newAdmin);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/sign-in">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle className="title">Registro</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Registro al Batallon de Transporte</IonTitle>
          </IonToolbar>
        </IonHeader>
        <form onSubmit={handleFormSubmit}>
          <IonList>
            <IonItem>
              <IonLabel position="fixed">Usuario</IonLabel>
              <IonInput
                type="text"
                value={user_name}
                onIonChange={(e) => setUserN(e.detail.value!)}
                placeholder="Pedro"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Contraseña</IonLabel>
              <IonInput
                type="password"
                value={contraseña}
                onIonChange={(e) => setContraseña(e.detail.value!)}
                placeholder="*********"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="fixed">Confirmar Contraseña</IonLabel>
              <IonInput
                type="password"
                value={c_contraseña}
                onIonChange={(e) => setCContraseña(e.detail.value!)}
                placeholder="*********"
              />
            </IonItem>
          </IonList>
          <aside>
            <IonLabel>
              <IonButton
                type="submit"
                href="/registrarse"
                expand="block"
                color={"medium"}
              >
                Registrarse
              </IonButton>
            </IonLabel>
          </aside>
        </form>
      </IonContent>
    </IonPage>
  );
};

export default Registrarse;
