import { Component, Input, OnInit, TemplateRef } from "@angular/core";
import { City } from "../model/cities";
@Component({
	selector: "app-loop",
	templateUrl: "./loop.component.html",
	styleUrls: ["./loop.component.scss"],
})
export class LoopComponent implements OnInit {
	@Input() cities: City[] = [];
	@Input() listTemplate?: TemplateRef<any>;

	constructor() {}

	ngOnInit(): void {}
}
