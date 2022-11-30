import { ObservesComponent } from "./observes/observes.component";
import { TableComponent } from "./table/table.component";
import { FormsComponent } from "./forms/forms.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "forms",
		component: FormsComponent,
	},
	{
		path: "table",
		component: TableComponent,
	},
	{
		path: "observe",
		component: ObservesComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DemoRoutingModule {}
