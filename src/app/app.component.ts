import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/Rx";
import { Observer } from "rxjs/Observer";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  aa = "10";
  cc = "sample";

  customObsSubscription: Subscription;

  ngOnInit() {
    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("first package");
      }, 2000);
      setTimeout(() => {
        observer.next("second package");
      }, 4000);
      setTimeout(() => {
        observer.next("third package");
      }, 4000);
      setTimeout(() => {
        //observer.error("this does not work");
        observer.complete();
      }, 3000);
      setTimeout(() => {
        observer.next("fourth package");
      }, 6000);
    });

    this.customObsSubscription = myObservable.subscribe(
      data => {
        console.log("data sent", data);
      },
      error => {
        console.log("error", error);
      },
      () => {
        console.log("completed");
      }
    );

    // myObservable.subscribe(data => {
    //   console.log("data sent1", data);
    // });

    // myObservable.subscribe(data => {
    //   console.log("data sent2", data);
    // });
  }

  currentRate = "0.26";

  arrayVal = ["some string", "bbbb", "ccccc"];
  dateVal = [new Date(), new Date(), new Date()];

  colorVal = "yellow";
  backColor = "red";

  inputChange(event) {
    let b = 10;
    console.log("Input Event", event);
    this.aa = event.target.value;
  }

  ngOnDestroy() {
    this.customObsSubscription.unsubscribe();
  }
}
