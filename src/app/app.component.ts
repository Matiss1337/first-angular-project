import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}

/// @component is ts decorator that allows you to mark a class as an Angular component and provide additional metadata that determines how the component should be processed, instantiated, and used at runtime.

/// ts Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter.
///Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

///selector: 'app-root' is the name of the component that will be used in the html file

/// templateUrl: './app.component.html' is the path to the html file
