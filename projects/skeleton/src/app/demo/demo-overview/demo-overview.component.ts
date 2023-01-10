import { Component, OnInit } from "@angular/core";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
enum DirectionEnum {
	UP = "UP",
	DOWN = "DOWN",
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}

@Component({
	selector: "app-demo-overview",
	templateUrl: "./demo-overview.component.html",
	styleUrls: ["./demo-overview.component.scss"],
})
export class DemoOverviewComponent implements OnInit {
	myDirection?: Direction;
	dirAsString?: string;

	constructor() {
		this.myDirection = DirectionEnum.DOWN as unknown as Direction;
		this.dirAsString = DirectionEnum.DOWN as unknown as string;
		this.myDirection = DirectionEnum.LEFT as string as Direction;
	}

	ngOnInit(): void {}
}
