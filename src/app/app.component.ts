import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aa = '10';


  arrayVal = ['1', '2', '3'];

  colorVal = "yellow";
  backColor = "red";


  inputChange(event) {
    let b = 10;
    console.log("Input Event", event);
    this.aa = event.target.value;
  }
}
