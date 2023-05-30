export interface Ivehicle {
  id?: string;
  model: string;
  placa: string;
  brand: string;
  chassis: string;
  status: string;
}

export interface List_Vehiculo {
  _id?: string;
  name: string;
  placa: string;
  marca: string;
  chasis: string;
  status: string;
}

export interface editVehiculo {
  _id?: string;
  name: string;
  placa: string;
  marca: string;
  chasis: string;
  status: string;
}

export interface IvehicleGet {
  _id?: string;
  model: string;
  placa: string;
  brand: string;
  chassis: string;
  status: string;
}


export const EmptyVehicle: Ivehicle = {
  id: "",
  brand: "",
  placa: "",
  model: "",
  chassis: "",
  status: "",
};
