export interface ICuenta {
  name: string;
  id: string;
  particion: number;
  panel: string;
  estado: string;
  btn: string;
  zonas?: any[];
  particiones?: any[];
}

export interface IActividad {
  id?:number;
  fecha: string;
  asunto: string;
  hora:string;
}

export interface INotificaciones {
  id?:number;
  fecha: string;
  asunto: string;
}

export const apiCuentas: ICuenta[] = [
  {
    name: "Oficina",
    id: "2zd33b8c",
    particion: 1,
    panel: "DSC",
    estado: "Desarmada",
    btn: "ARMAR",
    zonas: [
      {
        name: 'Zona 1',
        activated: true
      },
      {
        name: 'Zona 2',
        activated: false
      },
      {
        name: 'NombreLargo',
        activated: false
      },
      {
        name: 'Zona 4',
        activated: true
      },
      {
        name: 'Zona 5',
        activated: true
      },
      {
        name: 'Zona 6',
        activated: true
      },
      {
        name: 'Zona 7',
        activated: false
      },
      {
        name: 'Zona 8',
        activated: false
      },
      {
        name: 'Zona 9',
        activated: true
      },
      {
        name: 'Zona 10',
        activated: false
      },
      {
        name: 'Zona 11',
        activated: false
      },
      {
        name: 'Zona 12',
        activated: false
      },
      {
        name: 'Zona 13',
        activated: false
      },

    ],
    particiones:[
      {
        name: 'Partición 1',
      },
      {
        name: 'Partición 2',
      },
      {
        name: 'Partición 3',
      },
      {
        name: 'Partición 4',
      },
      {
        name: 'NombreParticion',
      },
      {
        name: 'Partición 6',
      },
      {
        name: 'Partición 7',
      },
      {
        name: 'Partición 8',
      },
      {
        name: 'Partición 9',
      },
      {
        name: 'Partición 10',
      },
      {
        name: 'Partición 11',
      },
      {
        name: 'Partición 12',
      },
      {
        name: 'Partición 13',
      }
    ],
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

export const apiActividad: IActividad[] = [
  {
    fecha: '17/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '15:03'
  },
  {
    fecha: '17/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '11:24'
  },
  {
    fecha: '13/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '19:42'
  },
  {
    fecha: '13/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '13:01'
  },
  {
    fecha: '11/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '21:12'
  },
  {
    fecha: '10/07/2023',
    asunto: 'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.',
    hora: '00:01'
  }
]

export const apiNotificaiones: INotificaciones[] = [
  {
    fecha:'3m',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
  {
    fecha:'5h',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
  {
    fecha:'6h',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
  {
    fecha:'2d',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
  {
    fecha:'2d',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
  {
    fecha:'3d',
    asunto:'Lorem ipsum dolor sit amet consectetur. Ultrices a nulla vitae et egestas laoreet.'
  },
]
