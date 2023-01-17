import { ComponentMapService } from "./../service/component-map.service";
import { Directive, Input, ViewContainerRef, OnInit } from "@angular/core";

@Directive({
	selector: "[adComponent]",
})
export class AdComponentDirective implements OnInit {
	@Input() adComponent: any;
	@Input() useMap: boolean = this.cms.hasMap;
	constructor(
		private viewContainerRef: ViewContainerRef,
		private cms: ComponentMapService
	) {}

	ngOnInit(): void {
		console.log("adComponent", this.adComponent);
		console.log("map", this.cms.componentMap);
		this.viewContainerRef.clear();
		if (this.useMap) {
			const component = this.cms.getKey(this.adComponent);
			if (component) {
				this.viewContainerRef.createComponent(component);
			}
		} else {
			this.viewContainerRef.createComponent(this.adComponent);
		}
	}
}
