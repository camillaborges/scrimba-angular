import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersComponent } from './component/customers/customers.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { FilterTextBoxComponent } from './customers/customers-list/filter-textbox.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [ CustomersComponent, CustomersListComponent, FilterTextBoxComponent ],
    exports: [ CustomersComponent ]
})

export class CustomersModule { }