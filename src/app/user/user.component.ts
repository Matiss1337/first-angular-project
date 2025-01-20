import {Component, Input, input, computed, Output, EventEmitter, output} from '@angular/core'; /// Input is decorator, input is function to pass props with signal

@Component({
    selector: 'app-user',
    standalone: true,
    templateUrl: './user.component.html',
    styleUrl: './user.component.css'
})
export class UserComponent {
    @Input({required: true}) id!: string;
    @Input({required: true}) avatar!: string; /// ! is used to tell that it will be initialized later
    @Input({required: true}) name!: string; ///required will trow error if missed
    @Output() select = new EventEmitter(); ///Output is used to pass data to parent component /// Older approach
    // select = output<string>(); ///Output is used to pass data to parent component and has eventEmiter automaticaly added /// Never feature

    // Signal aproach
    // avatar = input.required<string>(); ///input<type>(initial value) if adding required we cant pass initial value
    // name = input.required<string>();
    // imagePath = computed(() => {
    //     return `assets/users/${this.avatar()}`;
    // })

    get imagePath() {
        return `assets/users/${this.avatar}`;
    }

    onSelectUser() {
        this.select.emit(this.id); ///emit is used to pass data to parent component
    }
}


// Static Version
//
// import { Component, signal, computed } from '@angular/core';
//
// import { DUMMY_USERS} from "../dummy-users";
//
// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//
// @Component({
//     selector: 'app-user',
//     standalone: true,
//     templateUrl: './user.component.html',
//     styleUrl: './user.component.css'
// })
// export class UserComponent {
//     selectedUser = signal( DUMMY_USERS[randomIndex]); ///Sets state - SIGNAL
//     imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`); ///Sets computed to use with Signal, which will run only if one of signals changes
//
//     ///Not the way with signals
//     // get imagePath() {
//     //     return `assets/users/${this.selectedUser().avatar}`;
//     // }
//
//     onSelectUser() {
//         const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
//         this.selectedUser.set(DUMMY_USERS[randomIndex]); ///sets state - SIGNAL
//     }
// }
//
// // Component can be made by CLI with command -  ng g componentName
//
// // get will allow to compute property before passing it
// // imagePath() will be passed to element
//
//
// // State
// // Updates Dom when value changes causes rerendering of the component
//
// // If calling signal have to add() after defining signal
