import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css"; // importar el archivo CSS

import {
  IonButton,
  IonContent,
  IonFooter,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";

type SignInProps = {
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
};

const SignIn: React.FC<SignInProps> = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const history = useHistory();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (userName === "admin" && password === "Admin1234") {
      console.log("Access granted");
      history.push("/home");
      // Navigate to the home page or perform other actions here
    } else {
      console.log("Access denied");
      setErrorMessage(
        "Nombre de usuario o contrasenia mal escrita,Intente de nuevo."
      );
    }
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleFormSubmit(event);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <img src="/img/logo.jpg" alt="imagen" style={{ height: "100px" }} />
          <IonTitle>Batallon de Transporte</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <main className="container1">
          <form
            onSubmit={handleFormSubmit}
            onKeyDown={handleKeyDown}
            className="form1"
          >
            <h1 className="title1">Iniciar Sesión</h1>
            <IonList>
              <IonItem>
                <IonLabel position="floating">ADMIN</IonLabel>
                <IonInput
                  type="text"
                  value={userName}
                  onIonChange={(e) => setUserName(e.detail.value!)}
                  placeholder="Pedro"
                  className="input1"
                />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">CONTRASEÑA</IonLabel>
                <IonInput
                  type={showPassword ? "text" : "password"} // show password if showPassword is true
                  value={password}
                  onIonChange={(e) => setPassword(e.detail.value!)}
                  placeholder="*********"
                  className="input1"
                />
                <IonButton
                  fill="clear"
                  slot="end"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <IonIcon icon={showPassword ? eyeOff : eye} />
                </IonButton>
              </IonItem>
            </IonList>
            <IonButton expand="block" type="submit" className="button1">
              Iniciar Sesión
            </IonButton>

            {errorMessage && (
              <div style={{ color: "red", marginTop: "10px" }}>
                {errorMessage}
              </div>
            )}
          </form>
        </main>
      </IonContent>

      <IonFooter></IonFooter>
    </IonPage>
  );
};

export default SignIn;
