import React from "react";
import {
  IonHeader,
  IonButton,
  IonButtons,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import { chevronBackCircle, push } from "ionicons/icons";
import { useGetAllUsersQuery } from "../../slices/usuarioSlice";
import { IUsuario } from "../../interfaces/IUsuario";
import mobiscroll from "@mobiscroll/react-lite";
import { TabBar } from "./TabBar";
import "./editar_usuario.css";

const EditarUsuario: React.FC = () => {
  const { data = [], isLoading, isSuccess } = useGetAllUsersQuery();

  let table;
  if (isLoading) {
    table = (
      <tr>
        <th>Loading...</th>
      </tr>
    );
  } else if (isSuccess) {
    table =
      data &&
      data.map((user: IUsuario) => (
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>{user.edad}</td>
          <td>{user.rango}</td>
          <td>{user.cel}</td>
          <td>{user.genero}</td>
          <td>{user.status}</td>
          <td>
            <div className="mb-2">
              <IonButton
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor: "#41644A",
                }}
                href={`/EditUser/${user._id}`}
              >
                <IonIcon icon={push}></IonIcon>
                Editar
              </IonButton>
            </div>
          </td>
        </tr>
      ));
  }

  return (
    <mobiscroll.Form className="md-grid-responsive">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/administrar_usuarios">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <h2 style={{ textAlign: "center", margin: "0 auto" }}>
            Editar Conductor
          </h2>
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>
          <TabBar></TabBar>
        </mobiscroll.FormGroupTitle>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Rango</th>
                <th>Numero de Cel</th>
                <th>Genero</th>
                <th>Estado</th>
                <th>Editar</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </mobiscroll.FormGroup>
    </mobiscroll.Form>
  );
};

export default EditarUsuario;
