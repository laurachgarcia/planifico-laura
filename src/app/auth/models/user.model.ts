import {IPermiso} from './permisos.model';
import {IMenu} from './menu.model';

export interface IUser {
  id: number;
  user: string;
  login: string;
  documento: string;
  identificacion: string;
  nombre: string;
  username: string;
  cod_departamento: string;
  departamento: string;
  cod_municipio: string;
  municipio: string;
  direccion: string;
  telefono: string;
  email: string;
  estado: string;
  creado: string;
  profile: string;
  token: string;
  permisos: IPermiso[];
  menus: IMenu[];
}

export interface IAuthUser {
  login: string;
  password: string;
  remember?: boolean;
}
