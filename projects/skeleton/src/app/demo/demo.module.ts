import { BrowserModule } from "@angular/platform-browser";
import { StarterLibModule } from "starter-lib";
import { MainModule } from "@modules/main/main.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DemoRoutingModule } from "./demo-routing.module";
import { FormsComponent } from "./forms/forms.component";
import { TableComponent } from "./table/table.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ObservesComponent } from "./observes/observes.component";
import { ButtonboxComponent } from "./button/buttonbox/buttonbox.component";
import { ScrollingComponent } from "./scrolling/scrolling.component";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../app.module";
import { HttpClient } from "@angular/common/http";
import { DemoOverviewComponent } from "./demo-overview/demo-overview.component";
import { NgTemplateComponent } from "./ng-template/new-content.component";
import { HelloWorldComponent } from "./ng-template/hello-world/hello-world.component";
import { LoopComponent } from "./ng-template/loop/loop.component";
import { EasyComponentLoaderComponent } from "./easy-component-loader/easy-component-loader.component";
import { ButtonContainerComponent } from "./button/button-container/button-container.component";
import { InputTextComponent } from './forms/input-text/input-text.component';

@NgModule({
	declarations: [
		FormsComponent,
		TableComponent,
		ObservesComponent,
		ButtonboxComponent,
		ScrollingComponent,
		DemoOverviewComponent,
		NgTemplateComponent,
		HelloWorldComponent,
		LoopComponent,
		EasyComponentLoaderComponent,
		ButtonContainerComponent,
  InputTextComponent,
	],
	imports: [
		CommonModule,
		MainModule,
		DemoRoutingModule,
		ReactiveFormsModule,
		FormsModule,
		StarterLibModule,
		TranslateModule.forChild({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
})
export class DemoModule {}
