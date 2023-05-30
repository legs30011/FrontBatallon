import React from "react";
import mobiscroll from "@mobiscroll/react-lite";
import { TabBar } from "./TabBar";
import {
  IonButton,
  IonButtons,
  IonHeader,
  IonIcon,
  IonToolbar,
} from "@ionic/react";
import { chevronBackCircle } from "ionicons/icons";
import { useGetAllUsersQuery } from "../../slices/usuarioSlice";
import { IUsuario } from "../../interfaces/IUsuario";

import "./listar_usuarios.css";

const ListarUsuarios: React.FC = () => {
  //const isSignedIn = useSelector((state) => !!state.session);
  const {
    data = [],
    isLoading,

    isSuccess,
  } = useGetAllUsersQuery();
  let table;

  if (isLoading) {
    table = (
      <tr>
        <td colSpan={parseInt("cargando")}></td>
      </tr>
    );
  } else if (isSuccess) {
    table =
      data &&
      data.map((usuario: IUsuario) => (
        <tr key={usuario._id}>
          <td>{usuario.name}</td>
          <td>{usuario.edad}</td>
          <td>{usuario.rango}</td>
          <td>{usuario.cel}</td>
          <td>{usuario.genero}</td>
          <td>{usuario.status}</td>
        </tr>
      ));
  }

  return (
    <mobiscroll.Form className="md-grid">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonButton href="/administrar_usuarios">
              <IonIcon icon={chevronBackCircle}></IonIcon>
            </IonButton>
          </IonButtons>
          <h2 className="title">Tabla de Conductores</h2>
        </IonToolbar>
      </IonHeader>
      <mobiscroll.FormGroup>
        <mobiscroll.FormGroupTitle></mobiscroll.FormGroupTitle>
        <div className="table-wrapper">
          <table className="table">
            <thead>
              <tr className="rwd-table">
                <th>Nombre</th>
                <th>Edad</th>
                <th>Rango</th>
                <th>Numero de Cel</th>
                <th>Genero</th>
                <th>Estado</th>
              </tr>
            </thead>
            <tbody>{table}</tbody>
          </table>
        </div>
      </mobiscroll.FormGroup>
      <TabBar></TabBar>
    </mobiscroll.Form>
  );
};

export default ListarUsuarios;
