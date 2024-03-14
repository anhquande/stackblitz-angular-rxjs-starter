import { Component } from '@angular/core';
import { User } from '../../model/user.model';
import { UserListComponent } from '../user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './app-root.component.html',
  styleUrl: './app-root.component.css',
})
export class AppRootComponent {
  users: Array<User> = [
    { id: '1', firstName: 'Anton', lastName: 'Braun', age: 8 },
    { id: '2', firstName: 'Max', lastName: 'Lux', age: 4 },
  ];

  public onAddClicked(): void {
    console.log('onAddClicked');
  }
}
