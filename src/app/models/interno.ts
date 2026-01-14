export interface Interno {
  id: string;
  nombres: string;
  apellidos?: string;
  idUbicacion: number;
  cortesia?: number;
  fechaHoraRegistro?: number;
  activo?: boolean;
  clave?: string;
  fechaNacimiento?: Date;
  desarrollo?: boolean;
  cambiarClave?: boolean;
  idPerfil?: number;
  pabellon?: string;
  piso?: string;
  ala?: string;
  estado?: 'ACTIVO' | 'INACTIVO' | 'LIBRE' | 'BLOQUEADO';
  fechaIngreso?: Date;
  requeridoAgente?: boolean;
  sexo?: 'M' | 'F';
  fechaHoraUltimaLlamada?: number;
  prefijoPenal?: number;
  identificacion?: string;
  tratamientoDatos?: number;
  idGeografia?: number;
}
