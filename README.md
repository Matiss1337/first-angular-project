https://angular.dev/overview
in CLI
ng g c user --skip-tests (user is the component name) will create component
ng g c users/user (to create component in different folder)

terms
@Input - props from React @Input({required: true}) user!: User;
@Output() select = new EventEmitter<string>(); - output to parent element
computed - way to interact with available variables and react to state changes
union - user!: string | undefined

////////////////////////////////////////////////////////////////////////
INPUT and OUTPUT exsample between parent and child !!!!
////////////////////////////////////////////////////////////////////////
<main>
    <ul id="users">
        @for (user of users; track user.id) {
            <li>
                <app-user [user]="user" (select)="onSelectUser($event)"/>
            </li>
        }
    </ul>

    @if (selectedUser) {
        <app-tasks [userId]="selectedUser.id" [name]="selectedUser.name"/>
    } @else {
        <p id="fallback">Select a user to see their tasks!</p>
    }
</main>

<!--Very Important basics stuff!!!-->
<!--Render users in a list-->
<!--each app-user listens for click and if click happens in onSelectUser function we @output selected user-->
<!--then by selected user we know which app-tasks to show-->
<!--app tasks filters which items to show based by @Signals passed to it-->

////////////////////////////////////////////////////////////////////////
INPUT and OUTPUT exsample between parent and child !!!!
////////////////////////////////////////////////////////////////////////

Type vs Interface Type can be extended, but interface can be combined
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

////////////////////////////////////////////////////////////////////////

<!--Property Binding-->
<!--<img [src]="'assets/users/' + selectedUser.avatar"/>-->
<!--Wrap src in [] to bind the value of the src attribute to the expression 'assets/users/' + selectedUser.avatar using dynamic binding.-->

////////////////////////////////////////////////////////////////////////

For loop  //track tracks unique ids

@for (user of users; track user.id) {
<li>
<app-user [user]="user" (select)="onSelectUser($event)"/>
</li>
}

////////////////////////////////////////////////////////////////////////
Conditional rendering

@if (selectedUser) {
<app-tasks [name]="selectedUser.name"/>
} @else {
<p id="fallback">Select a user to see their tasks!</p>
}

///////////
strucural directive
<ul id="users">
<li *ngFor="let user of users; trackBy: trackByUserId">
    <app-user [user]="user" (select)="onSelectUser($event)"/>
</li>
</ul>

this has to go to ts file
trackByUserId(index: number, user: User): string {
return user.id;
}
