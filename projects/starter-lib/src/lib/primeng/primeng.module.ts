import { NgModule } from "@angular/core";
import { ScrollPanelModule } from "primeng/scrollpanel";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";
import { MessagesModule } from "primeng/messages";
import { MessageModule } from "primeng/message";
import { DropdownModule } from "primeng/dropdown";
import { InputTextModule } from "primeng/inputtext";

const exportModules: any = [
	ScrollPanelModule,
	ButtonModule,
	RippleModule,
	MessageModule,
	MessagesModule,
	DropdownModule,
	InputTextModule,
];

@NgModule({
	declarations: [],
	imports: [...exportModules],
	exports: [...exportModules],
})
export class PrimengModule {}
