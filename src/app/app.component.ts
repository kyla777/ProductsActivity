import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component ({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = "myStore";
}