import { StarterLibModule } from "starter-lib";
import { MainModule } from "@modules/main/main.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemoRoutingModule } from "./demo-routing.module";
import { FormsComponent } from "./forms/forms.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ObservesComponent } from "./observes/observes.component";
import { ButtonboxComponent } from "./buttonbox/buttonbox.component";
import { ScrollingComponent } from './scrolling/scrolling.component';

@NgModule({
	declarations: [FormsComponent, TableComponent, ObservesComponent, ButtonboxComponent, ScrollingComponent],
	imports: [CommonModule, MainModule, DemoRoutingModule, ReactiveFormsModule, StarterLibModule],
})
export class DemoModule {}
