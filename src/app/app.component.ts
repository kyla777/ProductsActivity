import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'pm-root',
  templateUrl: './app.component.html'
  // `
  // <div><h1>{{title}}</h1></div>
  // <something-component></something-component>
  // <nothing-component></nothing-component>
  // `
})

export class AppComponent {
  title: string = "myStore";
}