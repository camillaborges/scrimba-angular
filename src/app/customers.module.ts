import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';

import { SharedModule } from './shared/shared.module';
import { CustomersComponent } from './component/customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { FilterTextBoxComponent } from './customers/customers-list/filter-textbox.component';
import { CustomersRoutingModule } from './component/customers/customers-routing.module';

@NgModule({
    imports: [ CommonModule, SharedModule, FormsModule, CustomersRoutingModule ],
    declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
    exports: [ CustomersComponent ]
})

export class CustomersModule { } 