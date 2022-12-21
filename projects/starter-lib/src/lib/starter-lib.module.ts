import { NgModule } from "@angular/core";
import { StarterLibComponent } from "./starter-lib.component";
import { PrimengModule } from "./primeng/primeng.module";
import { ScrollPanelComponent } from "./components/scroll-panel/scroll-panel.component";
import { ScrollerComponent } from "./components/scroller/scroller.component";
import { ScrollContainerComponent } from "./components/scroll-container/scroll-container.component";

const exportModules: any = [PrimengModule];
const components: any = [
	StarterLibComponent,
	ScrollPanelComponent,
	ScrollerComponent,
	ScrollContainerComponent,
];

@NgModule({
	declarations: [...components],
	imports: [exportModules],
	exports: [...components, ...exportModules],
})
export class StarterLibModule {}
