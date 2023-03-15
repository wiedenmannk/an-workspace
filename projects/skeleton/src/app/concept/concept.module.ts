import { StarterLibModule } from "starter-lib";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ConceptRoutingModule } from "./concept-routing.module";

import { InjectContainerComponent } from "./inject-container/inject-container.component";
import { InjectFunctionComponent } from "./inject-function/inject-function.component";
import { MainModule } from "@modules/main/main.module";

@NgModule({
	declarations: [InjectContainerComponent, InjectFunctionComponent],
	imports: [CommonModule, ConceptRoutingModule, StarterLibModule, MainModule],
})
export class ConceptModule {}
