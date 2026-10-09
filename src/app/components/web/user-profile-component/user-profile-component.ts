import {Component, signal} from '@angular/core';
import {UserProfile} from '../../../common/interfaces/interfaces';
import {NgClass} from '@angular/common';

@Component({
  imports: [
    NgClass
  ],
  selector: 'app-user-profile-component',
  styleUrl: './user-profile-component.scss',
  templateUrl: './user-profile-component.html',
})
export class UserProfileComponent {
  user = signal<UserProfile>({
    name: 'Laura García',
    city: 'Valencia',
    isPremium: false,
  })

  changeCity(){
    this.user.update(currentUser => ({
      ...currentUser,
      city: currentUser.city === 'Madrid' ? 'Valencia' : 'Madrid',
    }))
  }

  togglePremium(){
    this.user.update(currentUser => ({
      ...currentUser,
      isPremium: !currentUser.isPremium
    }))
  }
}
