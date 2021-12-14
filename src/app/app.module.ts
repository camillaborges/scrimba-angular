import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from './component/customers/customers.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
  ],

  imports: [
    BrowserModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
