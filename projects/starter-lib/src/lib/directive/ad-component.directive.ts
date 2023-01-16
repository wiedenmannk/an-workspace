import { Directive, Input, ViewContainerRef, OnInit } from "@angular/core";

@Directive({
	selector: "[adComponent]",
})
export class AdComponentDirective implements OnInit {
	@Input() adComponent: any;
	constructor(public viewContainerRef: ViewContainerRef) {}

	ngOnInit(): void {
		console.log("adComponent", this.adComponent);
		this.viewContainerRef.createComponent(this.adComponent);
	}
}
