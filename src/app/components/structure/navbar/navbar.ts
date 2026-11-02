import {Component, inject, output} from '@angular/core';
import {NgbCollapse} from '@ng-bootstrap/ng-bootstrap';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {CartService} from '../../../services/cart-service';

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
  protected readonly cartService: CartService = inject(CartService);

  openCart = output<void>();
  onOpenCart() {
    this.openCart.emit();
  }
}
