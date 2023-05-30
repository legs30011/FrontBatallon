import React, { useState } from "react";
import {
  IonApp,
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonRadioGroup,
  IonRadio,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonBackButton,
  IonButtons,
  IonText,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonAlert,
  IonNote,
  IonSpinner,
  IonToast,
} from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import { usePostUserMutation } from "../../slices/usuarioSlice";
import { IUsuario2 } from "../../interfaces/IUsuario";

const AñadirUsuario: React.FC<{}> = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [rank, setRank] = useState<string>("");
  const [cellphone, setCellphone] = useState<string>("");
  const [gender, setGender] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const [addUsuario, { isLoading }] = usePostUserMutation();
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newUsuario: IUsuario2 = {
      name,
      age,
      rank,
      cellphone,
      gender,
      status,
    };

    const response = await addUsuario(newUsuario);

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
              <IonButton href="/administrar_usuarios">
                <IonIcon icon={chevronBackCircle}></IonIcon>
              </IonButton>
              <IonBackButton />
            </IonButtons>
            <IonTitle>Registrar Conductor</IonTitle>
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
              <IonLabel position="floating">Edad:</IonLabel>
              <IonInput
                type="number"
                value={age}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[0-9]*$/;
                  if (regex.test(inputValue)) {
                    setAge(inputValue);
                  }
                }}
                placeholder="25"
              />
            </IonItem>
            <IonItem>
              <IonLabel>Rango:</IonLabel>
              <IonSelect
                value={rank}
                onIonChange={(e) => setRank(e.detail.value!)}
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
                value={cellphone}
                onIonChange={(e) => {
                  const inputValue = e.detail.value!;
                  const regex = /^[0-9]*$/;
                  if (regex.test(inputValue)) {
                    setCellphone(inputValue);
                  }
                }}
                placeholder="71716572"
              />
            </IonItem>

            <IonRadioGroup
              value={gender}
              onIonChange={(e) => setGender(e.detail.value)}
            >
              <IonItem>
                <IonLabel>Género:</IonLabel>
              </IonItem>

              <IonItem>
                <IonLabel>Masculino</IonLabel>
                <IonRadio slot="start" value="Hombre" />
              </IonItem>

              <IonItem>
                <IonLabel>Femenino</IonLabel>
                <IonRadio slot="start" value="Mujer" />
              </IonItem>
            </IonRadioGroup>

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

            <IonButton
              type="submit"
              disabled={
                !name || !age || !rank || !cellphone || !gender || !status
              }
            >
              {isLoading ? <IonSpinner name="dots" /> : "Añadir Conductor"}
            </IonButton>
          </form>

          <IonAlert
            isOpen={isOpen}
            onDidDismiss={() => setIsOpen(false)}
            header={"Error"}
            message={
              "Hubo un error al añadir el conductor. Por favor inténtalo de nuevo."
            }
            buttons={["OK"]}
          />

          <IonToast
            isOpen={showToast}
            onDidDismiss={() => setShowToast(false)}
            message="Conductor añadido exitosamente."
            duration={3000}
            position="bottom"
            color="success"
          />
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default AñadirUsuario;
