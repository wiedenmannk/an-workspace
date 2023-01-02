import { NotFoundComponent } from "./not-found/not-found.component";
import { FormsModule } from "./modules/forms/forms.module";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { DevModule } from "@modules/dev/dev.module";

const routes: Routes = [
	{
		path: "",
		component: DefaultLayoutComponent,
		children: [
			{
				path: "dev",
				loadChildren: () => DevModule,
			},
			{
				path: "forms",
				loadChildren: () => FormsModule,
			},
			{
				path: "demo",
				loadChildren: () =>
					import("@demo/demo.module").then((m) => m.DemoModule),
			},
			{
				path: "**",
				component: NotFoundComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { enableTracing: true })],
	exports: [RouterModule],
})
export class AppRoutingModule {}
