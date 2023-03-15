import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-inject-container",
	templateUrl: "./inject-container.component.html",
	styleUrls: ["./inject-container.component.scss"],
})
export class InjectContainerComponent implements OnInit {
	dataModel: Array<{ label: string; action: string; css: string }> = [
		{
			label: "test1",
			action: "doIt",
			css: "p-button-primary",
		},
		{
			label: "test2",
			action: "make It So",
			css: "p-button-secondary",
		},
		{
			label: "test3",
			action: "make some action",
			css: "p-button-help",
		},
	];
	chosenAction: string = "";
	constructor() {}

	ngOnInit(): void {}

	recieveAction(event: any): void {
		this.chosenAction = event;
	}
}
