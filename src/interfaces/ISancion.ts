import * as Yup from "yup";

export interface ISancion {
  id: string;
  name: string;
  rango: string;
  cel: string;
  status: string;
  descripcion: string;
}

export interface ISeliminar {
  _id: string;
  name: string;
  rango: string;
  cel: string;
  status: string;
  descripcion: string;
}

export interface ISancion2 {
  _id: string;
  name: string;
  rango: string;
  cel: string;
  status: string;
  descripcion: string;
}



export const ValidationUserForm = Yup.object().shape({
  id: Yup.string(),
  name: Yup.string().required("El nombre es requerido"),
  rango: Yup.string().required("La edad es requerida"),
  cel: Yup.string().required("Un rango debe ser seleccionado"),
  status: Yup.string().required("Un numero de celular es requerido"),
  descripcion: Yup.string().required("Seleccione un genero"),
 
});

export const EmptySancion: ISancion = {
  id: "",
  name: "",
  rango: "",
  cel: "",
  status: "",
  descripcion: "",
};

