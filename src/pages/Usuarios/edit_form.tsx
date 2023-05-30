import React, { useEffect, useState } from "react";
import {
  IonPage,
  IonHeader,
  IonContent,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonButtons,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonRadio,
  IonRadioGroup,
  IonToast,
  IonAlert,
  IonSpinner,
} from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import {
  useGetAllUsersQuery,
  usePutUserMutation,
} from "../../slices/usuarioSlice";
import { IUsuario } from "../../interfaces/IUsuario";
import { useParams } from "react-router-dom";

const EditUser: React.FC = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [rank, setRank] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [gender, setGender] = useState("");
  const [status, setStatus] = useState("");

  const { _Id } = useParams<{ _Id: string }>();
  const { data = [] } = useGetAllUsersQuery();

  useEffect(() => {
    data.forEach((user: IUsuario) => {
      if (user._id === _Id) {
        setName(user.name);
        setAge(user.edad);
        setRank(user.rango);
        setCellphone(user.cel);
        setGender(user.genero);
        setStatus("Disponible");
      }
    });
  }, [data, _Id]);
  const [isOpen, setIsOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [EditUsuario, { isLoading }] = usePutUserMutation();

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedUser: IUsuario = {
      _id: _Id,
      name: name,
      edad: age,
      rango: rank,
      cel: cellphone,
      genero: gender,
      status: status,
    };

    const response = await EditUsuario(updatedUser);

    if ("data" in response) {
      setShowToast(true);
    } else {
      // handle the error case
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton fill="clear" routerLink="/administrar_usuarios">
              <IonIcon icon={chevronBackCircle} slot="icon-only" />
            </IonButton>
          </IonButtons>
          <IonTitle>Conductor</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <form onSubmit={handleFormSubmit}>
          <IonItem>
            <IonLabel position="floating">Name</IonLabel>
            <IonInput
              type="text"
              value={name}
              onIonChange={(e) => setName(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Edad</IonLabel>
            <IonInput
              type="number"
              value={age}
              onIonChange={(e) => setAge(e.detail.value!)}
            />
          </IonItem>

          <IonItem>
            <IonLabel position="floating">Rango</IonLabel>
            <IonSelect
              value={rank}
              onIonChange={(e) => setRank(e.detail.value!)}
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
            <select
              tabIndex={-1}
              aria-hidden="true"
              style={{ display: "none" }}
            >
              <option value=""></option>
            </select>
          </IonItem>

          {/* === ION TELEFONO CELULAR === */}
          <IonItem>
            <IonLabel position="floating">Cel</IonLabel>
            <IonInput
              type="tel"
              value={cellphone}
              onIonChange={(e) => setCellphone(e.detail.value!)}
            ></IonInput>
          </IonItem>

          {/* === ION GENERO === */}
          <IonRadioGroup
            value={gender}
            onIonChange={(e) => setGender(e.detail.value)}
          >
            <IonItem>
              <IonLabel>Genero</IonLabel>
            </IonItem>

            <IonItem>
              <IonLabel>Hombre</IonLabel>
              <IonRadio slot="start" value="Hombre" />
            </IonItem>

            <IonItem>
              <IonLabel>Mujer</IonLabel>
              <IonRadio slot="start" value="Mujer" />
            </IonItem>
          </IonRadioGroup>

          {/* === ION STATUS === */}
          <IonItem>
            <IonLabel position="floating">Status</IonLabel>
            <IonSelect
              value={status}
              onIonChange={(e) => setStatus(e.detail.value)}
            >
              <IonSelectOption value="Disponible">Disponible</IonSelectOption>
              <IonSelectOption value="Ocupado">Ocupado</IonSelectOption>
            </IonSelect>
          </IonItem>

          {/* === ION BOTON ACTUALIZAR === */}
          <IonButton
            type="submit"
            expand="block"
            className="ion-margin-top"
            disabled={
              !name || !age || !rank || !cellphone || !gender || !status
            }
          >
            {isLoading ? <IonSpinner name="dots" /> : "Editar Conductor"}
          </IonButton>
        </form>
        <IonAlert
          isOpen={isOpen}
          onDidDismiss={() => setIsOpen(false)}
          header={"Error"}
          message={
            "Hubo un error al editar el conductor. Por favor inténtalo de nuevo."
          }
          buttons={["OK"]}
        />
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message="Conductor editado exitosamente."
          duration={3000}
          position="bottom"
          color="success"
        />
      </IonContent>
    </IonPage>
  );
};
export default EditUser;
