import { Component } from '@angular/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  imports: [
    NgbCollapse,
    RouterLink,
    RouterLinkActive
  ],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  isMenuCollapsed: boolean = true;
}
