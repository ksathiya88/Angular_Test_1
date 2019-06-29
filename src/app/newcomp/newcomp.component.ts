import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newcomp',
  templateUrl: './newcomp.component.html',
  styleUrls: ['./newcomp.component.css']
})
export class NewcompComponent implements OnInit {
  sample = "sample";
  constructor() {
    console.log("class constructed");
  }

  ngOnInit() {
    console.log("newComponent intialized");
  }

  ngOnDestroy() {
    console.log("newComponent ngOnDestroyed called");
  }

}
