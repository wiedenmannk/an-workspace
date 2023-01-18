import { Component, OnInit, Input } from "@angular/core";

@Component({
	selector: "app-input-text",
	templateUrl: "./input-text.component.html",
	styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent implements OnInit {
	@Input() data: any;
	constructor() {
		console.log("data", this.data);
	}

	ngOnInit(): void {
		console.log("data", this.data);
	}
}
