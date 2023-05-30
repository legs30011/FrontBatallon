import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { Provider } from "react-redux";
import { store1 } from "./state";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
//import { SignIn } from "./pages/login/SignIn";

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
import Home from "./pages/Home";
import { Redirect } from "react-router";
import Calendario from "./pages/Calendario";
import Reportes from "./pages/Reportes";
import SignIn from "./pages/login/SignIn";

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <Provider store={store1}>
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
            <Route path="/sign-in" component={SignIn} exact={true}></Route>

            <Route exact path="/" render={() => <Redirect to="Home" />} />
          </IonRouterOutlet>
        </IonReactRouter>
      </Provider>
    </IonApp>
  );
};

export default App;
