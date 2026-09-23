import { Component } from '@angular/core';
import {Role, User} from '../../../common/interfaces/interfaces';

@Component({
  imports: [],
  selector: 'app-tipos-datos-component',
  styleUrl: './tipos-datos-component.scss',
  templateUrl: './tipos-datos-component.html',
})
export class TiposDatosComponent {

  color: string = 'rojo';
  numero: number = 1;
  numeroFloat: number = 1.23;
  booleanData: boolean = true;
  booleanDataFalse: boolean = false;

  colores: string[] = ['rojo','verde','azul'];
  numeros: number[] = [1,2,3,4];

  rol: Role = 'admin';
  usuario: User = {
    id: '1',
    name: 'Perico',
    email: 'perico@solvam.es',
    role: 'admin',
    phoneNumber: '+34689798720'
  };

}
