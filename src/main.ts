import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
// import {HeaderComponent} from "./app/header.component";

// bootstrapApplication(HeaderComponent).catch((err) => console.error(err));
bootstrapApplication(AppComponent).catch((err) => console.error(err));

/// Rendering HeaderComponent is possible, but not recommended, rather use AppComponent
