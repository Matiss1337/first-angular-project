import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    // template: '<h1>The Header</h1>',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    // styles: ['ng-container { display: block; }']
})

export class HeaderComponent {}

/// Template can be used here without TS file, but not advise, rather use templateUrl
/// standalone: true, is default in Angular 19+

// Styles can be used here without CSS file, but not advise, rather use styleUrls, rather use styleUrls which takes array of style files or styleUrl if single css file
