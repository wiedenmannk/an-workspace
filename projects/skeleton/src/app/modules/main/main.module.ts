import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AccordionModule } from "primeng/accordion";
import { ContentLayoutComponent } from "../../layout/content-layout/content-layout.component";
import { TabMenuModule } from "primeng/tabmenu";
import { DragDropModule } from "primeng/dragdrop";
import { DragdropService } from "@service/dragdrop.service";

const components = [ContentLayoutComponent];

@NgModule({
	declarations: [...components],
	imports: [CommonModule],
	exports: [
		// NgbModule,
		AccordionModule,
		TabMenuModule,
		DragDropModule,
		// PrimengModule,
		...components,
	],
	providers: [DragdropService],
})
export class MainModule {}
