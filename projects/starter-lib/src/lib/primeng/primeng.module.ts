import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";


const exportModules: any = [ScrollPanelModule, ButtonModule, RippleModule, MessageModule, MessagesModule];

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		... exportModules,
	],
	exports: [...exportModules],
})
export class PrimengModule { }
