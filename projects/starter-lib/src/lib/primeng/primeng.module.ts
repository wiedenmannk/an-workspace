import { NgModule } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { DropdownModule } from "primeng/dropdown";

const exportModules: any = [
	ScrollPanelModule,
	ButtonModule,
	RippleModule,
	MessageModule,
	MessagesModule,
	DropdownModule,
];

@NgModule({
	declarations: [],
	imports: [...exportModules],
	exports: [...exportModules],
})
export class PrimengModule {}
