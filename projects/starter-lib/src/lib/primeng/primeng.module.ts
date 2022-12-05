import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";


const exportModules: any = [ScrollPanelModule, ButtonModule, RippleModule];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		... exportModules,
	],
	exports: [...exportModules],
})
export class PrimengModule { }
