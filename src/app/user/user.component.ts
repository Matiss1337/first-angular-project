import {Component, Input, Output, EventEmitter} from '@angular/core'; /// Input is decorator, input is function to pass props with signal
import {User} from "./user.model";
import {CardComponent} from "../shared/card/card.component";

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    imports: [
        CardComponent
    ],
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required: true}) user!: User;
    @Input({required: true}) selected!: boolean;
    @Output() select = new EventEmitter<string>();

    get imagePath() {
        return `assets/users/${this.user.avatar}`;
    }

    onSelectUser() {
        this.select.emit(this.user.id); ///emit is used to pass data to parent component
    }
}
