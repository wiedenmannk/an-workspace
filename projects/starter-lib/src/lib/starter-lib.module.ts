import { NgModule } from "@angular/core";
import { StarterLibComponent } from "./starter-lib.component";
import { PrimengModule } from "./primeng/primeng.module";
import { ScrollPanelComponent } from "./components/scroll-panel/scroll-panel.component";
import { ScrollerComponent } from "./components/scroller/scroller.component";
import { ScrollContainerComponent } from "./components/scroll-container/scroll-container.component";
import { AdDirective } from "./directive/ad.directive";
import { AdComponentDirective } from "./directive/ad-component.directive";

const exportModules: any = [PrimengModule];
const components: any = [
	StarterLibComponent,
	ScrollPanelComponent,
	ScrollerComponent,
	ScrollContainerComponent,
	AdDirective,
	AdComponentDirective,
];

@NgModule({
	declarations: [...components],
	imports: [exportModules],
	exports: [...components, ...exportModules],
})
export class StarterLibModule {}
