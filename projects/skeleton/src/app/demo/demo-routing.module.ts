import { NgTemplateComponent } from "./ng-template/ng-template.component";
import { DemoOverviewComponent } from "./demo-overview/demo-overview.component";
import { ScrollingComponent } from "./scrolling/scrolling.component";
import { ObservesComponent } from "./observes/observes.component";
import { TableComponent } from "./table/table.component";
import { FormsComponent } from "./forms/forms.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
	{
		path: "",
		component: DemoOverviewComponent,
		children: [
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
			{
				path: "scrolling",
				component: ScrollingComponent,
			},
			{
				path: "ngtemplate",
				component: NgTemplateComponent,
			},
		],
	},
	/*

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
	{
		path: "scrolling",
		component: ScrollingComponent,
	}
*/
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class DemoRoutingModule {}
