import { Component, OnInit } from "@angular/core";

@Component({
	selector: "app-table",
	templateUrl: "./table.component.html",
	styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
	data = [] as any;
	constructor() {
		const line = {
			name: "Klaus",
			lastName: "Wiedenmann",
			street: "Osterstraße 20",
			city: "Pollenfeld",
		};
		this.data = Array.from({ length: 100 }, () => line);
		console.log("data", this.data);
	}
	ngOnInit(): void {}
}
