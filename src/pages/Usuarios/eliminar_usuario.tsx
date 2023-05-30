import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import mobiscroll from "@mobiscroll/react-lite";
import { chevronBackCircle } from "ionicons/icons";
import React from "react";

import { IUsuario } from "../../interfaces/IUsuario";
import {
  useDeleteUserMutation,
  useGetAllUsersQuery,
} from "../../slices/usuarioSlice";
import { TabBar } from "./TabBar";
import "./editar_usuario.css";

const EliminarUsuario: React.FC = () => {
  const { data = [], isLoading, isSuccess } = useGetAllUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const onDeleteUser = async (userId: string) => {
    await deleteUser(userId);
  };

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
          <td>{user.rango}</td>
          <td>{user.cel}</td>
          <td>
            <div className="mb-2">
              <IonButton
                className="mb-2"
                style={{ display: "flex", width: "100%" }}
                color="danger"
                onClick={() => onDeleteUser(user._id as string)}
              >
                Eliminar
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
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle>
          <TabBar></TabBar>
        </mobiscroll.FormGroupTitle>
        <h2 style={{ textAlign: "center", margin: "0 auto" }}>
          Eliminar Conductor
        </h2>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Rango</th>
                <th>Numero de Cel</th>
                <th>Accion</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </mobiscroll.FormGroup>
    </mobiscroll.Form>
  );
};

export default EliminarUsuario;
