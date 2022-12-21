import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-scrolling",
	templateUrl: "./scrolling.component.html",
	styleUrls: ["./scrolling.component.scss"],
})
export class ScrollingComponent implements OnInit {
	numbers: Array<number>;
	constructor() {
		this.numbers = Array(100)
			.fill(1)
			.map((x, i) => i);
	}

	ngOnInit(): void {}
}
