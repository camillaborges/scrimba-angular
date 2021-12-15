import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomersModule } from './customers.module';
import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';



@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    CustomersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
