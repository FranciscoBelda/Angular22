import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './components/structure/navbar/navbar';
import {Footer} from './components/structure/footer/footer';
import {MainComponent} from './components/web/main-component/main-component';
import {TiposDatosComponent} from './components/clase/tipos-datos-component/tipos-datos-component';

@Component({
  imports: [RouterOutlet, Navbar, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('01-angular22');
}
