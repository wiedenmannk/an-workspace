import { StarterLibModule } from "starter-lib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConceptRoutingModule } from "./concept-routing.module";

import { InjectContainerComponent } from "./inject-container/inject-container.component";
import { InjectFunctionComponent } from "./inject-function/inject-function.component";
import { MainModule } from "@modules/main/main.module";
import { InjectRecieverComponent } from "./inject-reciever/inject-reciever.component";
import { PlaygroundComponent } from "./playground/playground.component";

@NgModule({
	declarations: [
		InjectContainerComponent,
		InjectFunctionComponent,
		InjectRecieverComponent,
		PlaygroundComponent,
	],
	imports: [CommonModule, ConceptRoutingModule, StarterLibModule, MainModule],
})
export class ConceptModule {}
