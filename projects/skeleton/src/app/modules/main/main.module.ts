import { StarterLibModule } from "starter-lib";
import { NgModule } from "@angular/core";
import { AccordionModule } from "primeng/accordion";
import { TabMenuModule } from "primeng/tabmenu";
import { DragDropModule } from "primeng/dragdrop";
import { DragdropService } from "@service/dragdrop.service";

@NgModule({
	declarations: [],
	imports: [],
	exports: [
		// NgbModule,
		AccordionModule,
		TabMenuModule,
		DragDropModule,
		StarterLibModule,
		// PrimengModule,
	],
	providers: [DragdropService],
})
export class MainModule {}
