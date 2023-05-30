import React from "react";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router";
import Slider from "react-slick";
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
} from "@ionic/react";
import { chevronBackCircle, sunny } from "ionicons/icons";
import "./Home.css";
import { TabBar } from "./TabBar";

const AdminButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonButton
      onClick={onClick}
      routerLink="/administrar_usuarios"
      expand="block"
      color="primary"
      style={{ marginBottom: "1rem" }}
    >
      Administrar Conductores
    </IonButton>
  );
};

const VehicleButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonButton
      onClick={onClick}
      routerLink="/administrar_vehiculos"
      expand="block"
      color="tertiary"
      style={{ marginBottom: "1rem" }}
    >
      Administrar Vehiculos
    </IonButton>
  );
};

const SanctionButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <IonButton
      onClick={onClick}
      routerLink="/sancion"
      expand="block"
      color="secondary"
      style={{ marginBottom: "1rem" }}
    >
      Sancionar Conductor
    </IonButton>
  );
};

const Home: React.FC<{ isAuthenticated: boolean }> = ({ isAuthenticated }) => {
  const dispatch = useDispatch();

  const Administrar_Usuario = () => {
    console.log("cambiando de pagina");
    return <Redirect to="/administrar_usuarios" />;
  };

  return (
    <IonPage>
      <IonMenuButton slot="start" />

      <IonHeader>
        <IonToolbar>
          <IonButton href="/sign-in">
            <IonIcon icon={chevronBackCircle}></IonIcon>
          </IonButton>
          <IonButtons slot="end">
            {isAuthenticated && (
              <IonButton
                onClick={() =>
                  dispatch({
                    type: "sign-out",
                  })
                }
              >
                <IonIcon slot="icon-only" icon={sunny} />
              </IonButton>
            )}
          </IonButtons>
          <IonTitle>Inicio</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonCard>
          <IonCardHeader>
            <IonAvatar slot="start">
              <img src="https://picsum.photos/200" alt="avatar" />
            </IonAvatar>
            <IonLabel>
              <h2>
                ¡Bienvenido a la aplicación del Batallon de Transporte III
              </h2>
              <p>Selecciona una opción para continuar</p>
            </IonLabel>
          </IonCardHeader>
        </IonCard>

        <IonGrid>
          <IonRow>
            <IonCol>
              <AdminButton onClick={Administrar_Usuario} />
            </IonCol>
            <IonCol>
              <VehicleButton onClick={() => console.log("Vehicle button")} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <SanctionButton onClick={() => console.log("Sancion button")} />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <Slider
                dots={true}
                infinite={true}
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                autoplay={true}
                autoplaySpeed={3000}
              >
                <div>
                  <img src="/img/c1.jpg" alt="imagen1" />
                </div>
                <div>
                  <img src="/img/c2.jpg" alt="imagen2" />
                </div>
                <div>
                  <img src="/img/c4.jpg" alt="imagen3" />
                </div>
                <div>
                  <img src="/img/c5.jpg" alt="imagen4" />
                </div>
                <div>
                  <img src="/img/logo.jpg" alt="imagen5" />
                </div>
                <div>
                  <img src="/img/precos.jpg" alt="imagen6" />
                </div>
                <div>
                  <img src="/img/alineearrr.jpg" alt="imagen7" />
                </div>
              </Slider>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
      <TabBar></TabBar>
    </IonPage>
  );
};

export default Home;
