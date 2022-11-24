import { MainModule } from "@modules/main/main.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemoRoutingModule } from "./demo-routing.module";
import { FormsComponent } from "./forms/forms.component";
import { TableComponent } from "./table/table.component";

@NgModule({
	declarations: [FormsComponent, TableComponent],
	imports: [CommonModule, MainModule, DemoRoutingModule],
})
export class DemoModule {}
