import * as Yup from "yup";

export interface IUsuario {
  _id: string;
  name: string;
  edad: string;
  rango: string;
  cel: string;
  genero: string;
  status: string;
}

export interface IUeliminar {
  _id: string;
  name: string;
  edad: string;
  rango: string;
  cel: string;
  genero: string;
  status: string;
}


export interface IUsuario2 {
  id?: string;
  name: string;
  age: string;
  rank: string;
  cellphone: string;
  gender: string;
  status: string;
}

export const ValidationUserForm = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string().required("El nombre es requerido"),
  age: Yup.string().required("La edad es requerida"),
  rank: Yup.string().required("Un rango debe ser seleccionado"),
  cellphone: Yup.string().required("Un numero de celular es requerido"),
  gender: Yup.string().required("Seleccione un genero"),
  status: Yup.string().required("Seleccione el estado actual"),
});

export const EmptyUsuario: IUsuario = {
  
  _id: "",
  name: "",
  edad: "",
  rango: "",
  cel: "",
  genero: "",
  status: "",
};

