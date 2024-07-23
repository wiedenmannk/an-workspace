import { UniversalComponent } from "./../model/generics";
import { ComponentMapService } from "./../service/component-map.service";
import { Directive, Input, ViewContainerRef, OnInit } from "@angular/core";

@Directive({
	selector: "[adComponent]",
})
export class AdComponentDirective implements OnInit {
	@Input() adComponent: any;
	@Input() useMap: boolean = this.cms.hasMap;
	@Input() data?: any;
	constructor(
		private viewContainerRef: ViewContainerRef,
		private cms: ComponentMapService
	) {}

	ngOnInit(): void {
		console.log("adComponent", this.adComponent);
		console.log("map", this.cms.componentMap);
		this.viewContainerRef.clear();
		let componentRef;
		if (this.useMap) {
			componentRef = this.cms.getKey(this.adComponent);
		} else {
			componentRef = this.adComponent;
		}
		console.log("myComponent", componentRef);
		if (componentRef) {
			console.log("generate component");
			const component: { instance: UniversalComponent } =
				this.viewContainerRef.createComponent(componentRef);
			if (this.data && component) {
				console.log("data parameter", this.data);
				if (component.instance) {
					component.instance.data = this.data;
				}
				//
				console.log("instance of ref", component);
				console.log("createt with data");
			}
		}
	}
}
