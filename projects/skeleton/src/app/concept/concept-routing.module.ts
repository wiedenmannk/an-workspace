import { InjectContainerComponent } from "./inject-container/inject-container.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PlaygroundComponent } from "./playground/playground.component";

const routes: Routes = [
	{
		path: "injectFunction",
		component: InjectContainerComponent,
	},
	{
		path: "playground",
		component: PlaygroundComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class ConceptRoutingModule {}
