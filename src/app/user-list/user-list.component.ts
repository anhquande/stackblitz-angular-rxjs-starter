import { Component, Input } from '@angular/core';
import { User } from '../../model/user.model';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css',
})
export class UserListComponent {
  @Input({
    required: true,
  })
  public users!: Array<User>;
}
