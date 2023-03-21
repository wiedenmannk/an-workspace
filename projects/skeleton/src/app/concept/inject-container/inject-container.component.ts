import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

@Component({
	selector: "app-inject-container",
	templateUrl: "./inject-container.component.html",
	styleUrls: ["./inject-container.component.scss"],
})
export class InjectContainerComponent implements OnInit, OnDestroy {
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
	chosenSomething: string = "";
	reciever = new Subject<any>();
	$isDestroyed = new Subject<any>();
	constructor() {
		this.reciever.pipe(takeUntil(this.$isDestroyed)).subscribe((action) => {
			console.log("reciever get action", action);
		});
	}

	ngOnInit(): void {}

	ngOnDestroy(): void {
		this.$isDestroyed.complete();
	}

	doSomething(action: string): void {
		console.log("do this", this);
		this.chosenSomething = action;
	}

	recieveAction(event: any): void {
		this.chosenAction = event;
	}
}
