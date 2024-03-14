import { Component } from '@angular/core';
import { UserListComponent } from '../user-list/user-list.component';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [UserListComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css',
})
export class MainPageComponent {
  users: Array<User> = [
    { id: '1', firstName: 'Anton', lastName: 'Braun', age: 8 },
    { id: '2', firstName: 'Max', lastName: 'Lux', age: 4 },
  ];
}
