export interface IData{
  name: string;
  id: string;
  particion: number;
  panel: string;
  estado: string;
  btn: string
}

const data:IData[] = [
  {
    name: "Oficina",
    id: "2zd33b8c",
    particion: 1,
    panel: "DSC",
    estado: "Desarmada",
    btn: "ARMAR",
  },
  {
    name: "Terraza",
    id: "6trfgkkj",
    particion: 1,
    panel: "PARADOX",
    estado: "Armada",
    btn: "DESARMAR",
  },
  {
    name: "Terraza",
    id: "7bcr49em",
    particion: 2,
    panel: "PARADOX",
    estado: "Armada",
    btn: "DESARMAR",
  },
  {
    name: "Ventana",
    id: "7bcr49eSm",
    particion: 1,
    panel: "HONEYWELL",
    estado: "Desarmada",
    btn: "ARMAR",
  },
  {
    name: "Patio",
    id: "7bcr45eSm",
    particion: 1,
    panel: "ALONSO",
    estado: "Desarmada",
    btn: "ARMAR",
  },
  {
    name: "Habitación",
    id: "1351546rgsg",
    particion: 1,
    panel: "HONEYWELL",
    estado: "Desarmada",
    btn: "ARMAR",
  },
  {
    name: "Cocina",
    id: "j4h65k2j4h",
    particion: 1,
    panel: "CROW",
    estado: "Desarmada",
    btn: "ARMAR",
  },
];

export default data;
