import React, { useState } from "react";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonToolbar,
  IonButtons,
  IonTitle,
  IonIcon,
  IonToast,
  IonSpinner,
  IonAlert,
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
import { ISancion2 } from "../../interfaces/ISancion";
import { usePostSancionMutation } from "../../slices/sancionSlice";

export const Sancion: React.FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [rango, setRango] = useState<string>("");
  const [cel, setCel] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [descripcion, setDescripcion] = useState<string>("");
  const [addSancion, { isLoading }] = usePostSancionMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newSancion: ISancion2 = {
      name,
      rango,
      cel,
      status,
      descripcion,
      _id: "",
    };

    const response = await addSancion(newSancion);

    if ("data" in response) {
      setShowToast(true);
    } else {
      // handle the error case
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonButton href="/home">
                <IonIcon icon={chevronBackCircle}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Registrar Sancion</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleFormSubmit} className="form">
            <IonItem>
              <IonLabel position="floating">Nombre completo:</IonLabel>
              <IonInput
                type="text"
                value={name}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(inputValue)) {
                    setName(inputValue);
                  }
                }}
                placeholder="Pedro"
              />
            </IonItem>

            <IonItem>
              <IonLabel>Rango:</IonLabel>
              <IonSelect
                value={rango}
                onIonChange={(e) => setRango(e.detail.value!)}
                placeholder="Sargento Tercero"
              >
                <IonSelectOption value="Sargento Segundo">
                  Sargento Segundo
                </IonSelectOption>
                <IonSelectOption value="Sargento Primero">
                  Sargento Primero
                </IonSelectOption>
                <IonSelectOption value="Suboficial Inicial">
                  Suboficial Inicial
                </IonSelectOption>
                <IonSelectOption value="Suboficial Segundo">
                  Suboficial Segundo
                </IonSelectOption>
                <IonSelectOption value="Suboficial Primero">
                  Suboficial Primero
                </IonSelectOption>
                <IonSelectOption value="Suboficial Mayor">
                  Suboficial Mayor
                </IonSelectOption>
                <IonSelectOption value="Suboficial Maestre">
                  Suboficial Maestre
                </IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel position="floating">Celular:</IonLabel>
              <IonInput
                type="tel"
                value={cel}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[0-9]*$/;
                  if (regex.test(inputValue)) {
                    setCel(inputValue);
                  }
                }}
                placeholder="71716572"
              />
            </IonItem>

            <IonItem>
              <IonLabel>Estatus:</IonLabel>
              <IonSelect
                value={status}
                onIonChange={(e) => setStatus(e.detail.value)}
              >
                <IonSelectOption value="Disponible">Disponible</IonSelectOption>
                <IonSelectOption value="Servicio">Servicio</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Descipcion:</IonLabel>
              <IonSelect
                value={descripcion}
                onIonChange={(e) => setDescripcion(e.detail.value!)}
                placeholder="Tarde"
              >
                <IonSelectOption value="Arresto ,domingo o dia a disposicion 24 horas">
                  Tarde
                </IonSelectOption>
                <IonSelectOption
                  value="capitulo 1art 10 faltas graves,57.- Realizar sin orden ni motivo justificado viajes, maniobras,
                        acrobacias peligrosas con máquinas, vehículos o armas cuyo
                        manejo les está encomendado.
                        "
                >
                  Desvio
                </IonSelectOption>
                <IonSelectOption
                  value="capitulo 1art 10 faltas graves, 4.- Entregar sin orden superior material o instrumentos de naves o
                        vehículos que se encuentren bajo su custodia o
                        responsabilidad"
                >
                  Uso Inapropiado
                </IonSelectOption>
                <IonSelectOption
                  value="capitulo 1art 10 faltas graves 58.- Conducir una nave o vehículo en forma riesgosa o en estado
                        de ebriedad"
                >
                  Alcohol
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton
              type="submit"
              expand="block"
              className="ion-margin-top"
              disabled={!name || !rango || !cel || !status || !descripcion}
            >
              {isLoading ? <IonSpinner name="dots" /> : "Añadir Sancion"}
            </IonButton>
          </form>

          <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            header={"Error"}
            message={
              "Hubo un error al añadir la sancion. Por favor inténtalo de nuevo."
            }
            buttons={["OK"]}
          />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Sancion añadido exitosamente."
            duration={3000}
            position="bottom"
            color="success"
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Sancion;
