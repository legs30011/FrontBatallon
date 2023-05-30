import React, { useState, useEffect } from "react";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRadioGroup,
  IonListHeader,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonRange,
  IonButton,
  IonToolbar,
  IonBackButton,
  IonButtons,
  IonTitle,
  IonDatetime,
  IonToggle,
  IonCheckbox,
  IonText,
  IonIcon,
  IonAlert,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "react-router-dom";

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
import "./anadir_vehiculo.css";
import {
  useGetAllVehicleQuery,
  usePutVehicleMutation,
} from "../../slices/vehiculoSlice";
import { editVehiculo } from "../../interfaces/IVehiculo";

interface RouteParams {
  id: string;
}

export const EditVehiculo: React.FunctionComponent = () => {
  const { id } = useParams<RouteParams>();
  const [name, setModel] = useState<string>("");
  const [placa, setPlaca] = useState<string>("");
  const [marca, setBrand] = useState<string>("");
  const [chasis, setChassis] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [EditVehiculo, { isLoading }] = usePutVehicleMutation();

  const { _Id } = useParams<{ _Id: string }>();
  const { data = [], isSuccess } = useGetAllVehicleQuery();

  useEffect(() => {
    data &&
      data.map((vehiculo: editVehiculo) => {
        if (vehiculo._id === _Id) {
          setModel(vehiculo.name);
          setPlaca(vehiculo.placa);
          setBrand(vehiculo.marca);
          setChassis(vehiculo.chasis);
          setStatus("Disponible");
        }
      });
  }, [isSuccess]);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedVehicle: editVehiculo = {
      _id: _Id,
      name,
      placa,
      marca,
      chasis,
      status,
    };
    const response = await EditVehiculo(updatedVehicle);

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
              <IonButton href="/administrar_vehiculos">
                <IonIcon icon={chevronBackCircle} />
              </IonButton>
            </IonButtons>
            <IonTitle>{id ? "Editar Vehículo" : "Editar Vehículo"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <form onSubmit={handleFormSubmit}>
            <IonListHeader>
              <IonLabel>Datos del vehículo</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel position="stacked">Modelo</IonLabel>
              <IonInput
                type="text"
                name="model"
                value={name}
                onIonChange={(e) => setModel(e.detail.value!)}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Placa</IonLabel>
              <IonInput
                type="text"
                name="placa"
                value={placa}
                onIonChange={(e) => setPlaca(e.detail.value!)}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Marca</IonLabel>
              <IonSelect
                name="brand"
                value={marca}
                placeholder="Seleccione la marca"
                onIonChange={(e) => setBrand(e.detail.value)}
              >
                <IonSelectOption value="Ford">Volvo</IonSelectOption>
                <IonSelectOption value="Chevrolet">Chevrolet</IonSelectOption>
                <IonSelectOption value="Toyota">Toyota</IonSelectOption>
                <IonSelectOption value="Honda">Honda</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonItem>
              <IonLabel position="stacked">Chasis</IonLabel>
              <IonInput
                type="text"
                name="chassis"
                value={chasis}
                onIonChange={(e) => setChassis(e.detail.value!)}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel>Estado</IonLabel>
              <IonRadioGroup
                name="status"
                value={status}
                onIonChange={(e) => setStatus(e.detail.value)}
              >
                <IonItem>
                  <IonLabel>Disponible</IonLabel>
                  <IonRadio slot="start" value="Disponible" />
                </IonItem>
                <IonItem>
                  <IonLabel>Servicio</IonLabel>
                  <IonRadio slot="start" value="Servicio" />
                </IonItem>
                <IonItem>
                  <IonLabel>Desviado</IonLabel>
                  <IonRadio slot="start" value="Desviado" />
                </IonItem>
                <IonItem>
                  <IonLabel>Bloqueo</IonLabel>
                  <IonRadio slot="start" value="Bloqueo" />
                </IonItem>
                <IonItem>
                  <IonLabel>Arruinado</IonLabel>
                  <IonRadio slot="start" value="Arruinado" />
                </IonItem>
              </IonRadioGroup>
            </IonItem>
            <IonButton
              type="submit"
              expand="block"
              className="ion-margin-top"
              disabled={!name || !placa || !marca || !chasis || !status}
            >
              {isLoading ? <IonSpinner name="dots" /> : "Editar Vehiculo"}
            </IonButton>
          </form>
          <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            header={"Error"}
            message={
              "Hubo un error al editar el vehiculo. Por favor inténtalo de nuevo."
            }
            buttons={["OK"]}
          />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="vehiculo editado exitosamente."
            duration={3000}
            position="bottom"
            color="success"
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};
export default EditVehiculo;
