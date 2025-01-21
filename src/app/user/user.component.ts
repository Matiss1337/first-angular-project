import {Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core'; /// Input is decorator, input is function to pass props with signal

// type User = {
//     id: string;
//     name: string;
//     avatar: string;
// }

interface User {
    id: string;
    name: string;
    avatar: string;
} ///interface is used to define the type of object

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required: true}) user!: User; ///Input is used to pass data to child component /// Older approach};

    @Output() select = new EventEmitter<string>(); ///Output is used to pass data to parent component /// Older approach

    get imagePath() {
        return `assets/users/${this.user.avatar}`;
    }

    onSelectUser() {
        this.select.emit(this.user.id); ///emit is used to pass data to parent component
    }
}
