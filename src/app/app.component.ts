import {Component} from '@angular/core';
import {HeaderComponent} from "./header/header.component";
import {UserComponent} from "./user/user.component";
import {TasksComponent} from "./tasks/tasks.component";
import {DUMMY_USERS} from "./dummy-users"; ///way to pass data to parent element

@Component({
    selector: 'app-root',
    standalone: true,
    imports:    [HeaderComponent, UserComponent,TasksComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
})
export class AppComponent {
    users = DUMMY_USERS; ///way to pass data to parent element
    selectedUserId = 'u1';

    get selectedUser() {
        return this.users.find((user) => user.id === this.selectedUserId)!;
    }

    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
