import { Map } from "immutable";
import { legacy_createStore as createStore } from "redux";

declare module "react-redux" {
  export interface DefaultRootState extends State {}
}

interface Session {
  id: string;
  userId: string;
}

interface User {
  id: string;
  username: string;
  rango: string;
  grado: string;
}

interface State {
  session: Session | undefined;
  usersMap: Map<string, User>;
}

const DEFAULT_STATE: State = {
  session: { id: "", userId: "" },
  usersMap: Map(),
};
interface SignInAction {
  type: "sign-in";
  meta: {
    sessionId: string;
    userId: string;
  };
}
interface SignOutAction {
  type: "sign-out";
}
interface LoadUserAction {
  type: "load-user";
  meta: User;
}
interface AdministrarUsuarios {
  type: "administrar_usuarios";
  meta: User;
}
interface ListarUsuarios {
  type: "listar_usuarios";
  meta: User;
}
interface AñadirUsuario {
  type: "añadir_usuario";
  meta: User;
}
interface EliminarUsuario {
  type: "eliminar_usuario";
  meta: User;
}

type Action =
  | SignInAction
  | LoadUserAction
  | SignOutAction
  | AdministrarUsuarios
  | ListarUsuarios
  | AñadirUsuario
  | EliminarUsuario;

function reducer(state: State = DEFAULT_STATE, action: Action): State {
  switch (action.type) {
    case "sign-in":
      return {
        ...state,
        session: { id: action.meta.sessionId, userId: action.meta.userId },
      };
    case "sign-out":
      return {
        ...state,
        session: undefined,
      };
    case "administrar_usuarios":
      return {
        ...state,
        session: undefined,
      };
    case "añadir_usuario":
      return {
        ...state,
        session: undefined,
      };
    case "listar_usuarios":
      return {
        ...state,
        session: undefined,
      };
    case "eliminar_usuario":
      return {
        ...state,
        session: undefined,
      };
    case "load-user":
      return {
        ...state,
        usersMap: state.usersMap.set(action.meta.id, action.meta),
      };
    default:
      return state;
  }
}
export const store1 = createStore(reducer);
