import { Component, OnInit } from "@angular/core";
import { City } from "./model/cities";

@Component({
	selector: "app-new-content",
	templateUrl: "./new-content.component.html",
	styleUrls: ["./new-content.component.scss"],
})
export class NgTemplateComponent implements OnInit {
	cities: City[] = [
		{ name: "New York", code: "NY" },
		{ name: "Rome", code: "RM" },
		{ name: "London", code: "LDN" },
		{ name: "Istanbul", code: "IST" },
		{ name: "Paris", code: "PRS" },
	];

	isDefault = true;
	isLoggedIn = false;

	constructor() {}

	ngOnInit(): void {}
}
