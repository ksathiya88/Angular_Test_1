import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewcompComponent } from './newcomp/newcomp.component';
import { FormsModule } from "@angular/forms";
import { CustomDirective } from './custom.directive';
import { TestPipe } from './test.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DeleteService } from './delete.service';


@NgModule({
  declarations: [
    AppComponent,
    NewcompComponent,
    CustomDirective,
    TestPipe,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
