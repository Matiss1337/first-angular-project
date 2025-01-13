import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    // template: '<h1>The Header</h1>',
    standalone: true,
    templateUrl: './header.component.html',
    // styleUrls: ['./header.component.css']
})

export class HeaderComponent {}

/// Template can be used here without TS file, but not advise, rather use templateUrl
/// standalone: true, is default in Angular 19+
