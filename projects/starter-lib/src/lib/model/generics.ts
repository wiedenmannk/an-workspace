import { Input, Component } from "@angular/core";

export interface UniversalComponent {
	data: any;
}

@Component({ selector: "app-generic-component", template: "" })
export class GenericComponent {
	@Input() data: any;
	constructor() {}
}

export interface ModelReciever {
	instance: UniversalComponent;
}
