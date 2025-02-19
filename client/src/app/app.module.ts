import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { EmployeesFormComponent } from './components/employees/employees-form/employees-form.component';
import { EmployeesListComponent } from './components/employees/employees-list/employees-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    EmployeesComponent,
    EmployeesFormComponent,
    EmployeesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
