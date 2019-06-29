import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  aa = '10';
  cc = "sample";

  currentRate ="0.26";


  arrayVal = ['some string', 'bbbb', 'ccccc'];
  dateVal = [new Date(), new Date(), new Date()];



  colorVal = "yellow";
  backColor = "red";


  inputChange(event) {
    let b = 10;
    console.log("Input Event", event);
    this.aa = event.target.value;
  }
}
