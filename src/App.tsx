import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home";
import Calendario from "./pages/Calendario";
import Reportes from "./pages/Reportes";
import SignIn from "./pages/login/SignIn";
import Administrar_Usuario from "../src/pages/Usuarios/administrar_usuarios";
import AñadirUsuario from "./pages/Usuarios/añadir_usuario";
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

/* Theme variables */
import "./theme/variables.css";
import { Provider } from "react-redux";
import Listar_Usuarios from "../src/pages/Usuarios/listar_usuarios";
import EliminarUsuario from "../src/pages/Usuarios/eliminar_usuario";
import Administrar_Vehiculos from "./pages/Vehiculos/administrar_vehiculos";
import Listar_Vehiculos from "./pages/Vehiculos/listar_vehiculos";
import Anadir_Vehiculo from "./pages/Vehiculos/anadir_vehiculo";
import EliminarVehiculo from "./pages/Vehiculos/eliminar_vehiculo";
import Sancion from "./pages/Sancion/sanciones";
import Registrarse from "./pages/registrarse";
import { store } from "./app/store";
import React, { useState } from "react";
import EditarUsuario from "./pages/Usuarios/editar_usuario";
import EditUser from "./pages/Usuarios/edit_form";
import EditarVehiculo from "./pages/Vehiculos/editar_vehiculo";
import EditVehiculo from "./pages/Vehiculos/edit_formV";

setupIonicReact();

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <IonApp>
      <Provider store={store}>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/:tab(home)" component={Home} exact={true}></Route>
            <Route
              path="/:tab(calendario)"
              component={Calendario}
              exact={true}
            ></Route>
            <Route
              path="/:tab(reportes)"
              component={Reportes}
              exact={true}
            ></Route>
            <Route path="/sign-in" component={SignIn} exact={true}>
              {" "}
              <SignIn setIsAuthenticated={setIsAuthenticated} />{" "}
            </Route>

            <Route
              path="/administrar_usuarios"
              component={Administrar_Usuario}
              exact={true}
            ></Route>
            <Route
              path="/listar_usuarios"
              component={Listar_Usuarios}
              exact={true}
            ></Route>
            <Route
              path="/añadir_usuario"
              component={AñadirUsuario}
              exact={true}
            ></Route>
            <Route
              path="/eliminar_usuario"
              component={EliminarUsuario}
              exact={true}
            ></Route>
            <Route
              path="/editar_usuario"
              component={EditarUsuario}
              exact={true}
            ></Route>

            <Route
              path="/EditUser/:_Id"
              component={EditUser}
              exact={true}
            ></Route>

            <Route
              path="/administrar_vehiculos"
              component={Administrar_Vehiculos}
              exact={true}
            ></Route>

            <Route
              path="/listar_vehiculos"
              component={Listar_Vehiculos}
              exact={true}
            ></Route>

            <Route
              path="/anadir_vehiculo"
              component={Anadir_Vehiculo}
              exact={true}
            ></Route>

            <Route
              path="/eliminar_vehiculo"
              component={EliminarVehiculo}
              exact={true}
            ></Route>

            <Route
              path="/editar_vehiculo"
              component={EditarVehiculo}
              exact={true}
            ></Route>
            <Route
              path="/EditVehiculo/:_Id"
              component={EditVehiculo}
              exact={true}
            ></Route>

            <Route path="/sancion" component={Sancion} exact={true}></Route>

            <Route
              path="/registrarse"
              component={Registrarse}
              exact={true}
            ></Route>

            <Route exact={true} path="/">
              {isAuthenticated ? (
                <Redirect to="/home" />
              ) : (
                <SignIn setIsAuthenticated={setIsAuthenticated} />
              )}
            </Route>
          </IonRouterOutlet>
        </IonReactRouter>
      </Provider>
    </IonApp>
  );
};

export default App;
