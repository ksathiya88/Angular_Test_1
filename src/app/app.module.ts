import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import {FormsModule} from "@angular/forms";
import { CustomDirective } from './custom.directive';
import { TestPipe } from './test.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    CustomDirective,
    TestPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
