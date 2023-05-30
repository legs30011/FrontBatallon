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
  IonBackButton,
  IonButtons,
  IonTitle,
  IonIcon,
  IonAlert,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { useForm, Controller } from "react-hook-form";

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
import { TabBar } from "./TabBar";
import { chevronBackCircle, chevronForwardCircle } from "ionicons/icons";
import "./anadir_vehiculo.css";
import { usePostVehicleMutation } from "../../slices/vehiculoSlice";
import { Ivehicle } from "../../interfaces/IVehiculo";

export const Anadir_Vehiculo: React.FC<{}> = () => {
  //const {addVehicle} = usePostVehicleMutation();
  const [model, setmodel] = useState<string>("");
  const [placa, setPlaca] = useState<string>("");
  const [brand, setBrand] = useState<string>("");
  const [chassis, setChassis] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [addVehicle, { isLoading }] = usePostVehicleMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newVehicle: Ivehicle = {
      model,
      placa,
      brand,
      chassis,
      status,
    };

    const response = await addVehicle(newVehicle);

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
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonButton href="/administrar_vehiculos">
                  <IonIcon icon={chevronBackCircle}></IonIcon>
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
            <IonTitle className="title_center">
              Formulario Crear Vehiculo
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <form onSubmit={handleFormSubmit} className="form">
            <IonItem>
              <IonLabel>Modelo del Vehiculo</IonLabel>
              <IonInput
                type="text"
                value={model}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[a-zA-Z\s]*$/;
                  if (regex.test(inputValue)) {
                    setmodel(inputValue);
                  }
                }}
                placeholder="Ej.FH16"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Placa</IonLabel>
              <IonInput
                type="text"
                value={placa}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[a-zA-Z0-9\s]*$/;
                  if (regex.test(inputValue)) {
                    setPlaca(inputValue);
                  }
                }}
                placeholder="Ej.1702JIK"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Marca</IonLabel>
              <IonSelect
                name="brand"
                value={brand}
                placeholder="Seleccione la marca"
                onIonChange={(e) => setBrand(e.detail.value!)}
              >
                <IonSelectOption value="Ford">Volvo</IonSelectOption>
                <IonSelectOption value="Chevrolet">Chevrolet</IonSelectOption>
                <IonSelectOption value="Toyota">Toyota</IonSelectOption>
                <IonSelectOption value="Honda">Honda</IonSelectOption>
              </IonSelect>
            </IonItem>

            <IonItem>
              <IonLabel>Numero de Chasis</IonLabel>
              <IonInput
                type="number"
                value={chassis}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^\d{20}$/;
                  if (regex.test(inputValue)) {
                    setChassis(inputValue);
                  }
                }}
                placeholder="Ej.799878796675574"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Estado</IonLabel>
              <IonSelect
                placeholder="Seleccione"
                value={status}
                onIonChange={(e) => setStatus(e.detail.value!)}
              >
                <IonSelectOption value="Disponible">Disponible</IonSelectOption>
                <IonSelectOption value="Servicio">Servicio</IonSelectOption>
                <IonSelectOption value="Desviado">Desviado</IonSelectOption>
                <IonSelectOption value="Bloqueo">Bloqueo</IonSelectOption>
                <IonSelectOption value="Arruinado">Arruinado</IonSelectOption>
              </IonSelect>
            </IonItem>

            {/* === ION RANGE === */}
            <IonButton
              type="submit"
              disabled={!model || !placa || !brand || !chassis || !status}
            >
              {isLoading ? <IonSpinner name="dots" /> : "Añadir Vehiculo"}
            </IonButton>
          </form>

          <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            header={"Error"}
            message={
              "Hubo un error al añadir el vehiculo. Por favor inténtalo de nuevo."
            }
            buttons={["OK"]}
          />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Vehiculo añadido exitosamente."
            duration={3000}
            position="bottom"
            color="success"
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Anadir_Vehiculo;
