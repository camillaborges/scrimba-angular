import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module';
import { CustomersModule } from './customers.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],

  imports: [
    BrowserModule,
    CoreModule,
    CustomersModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
