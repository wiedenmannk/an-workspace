import { UniversalComponent } from "./../../../../../../starter-lib/src/lib/model/generics";
import { Component, Input, OnInit, TemplateRef } from "@angular/core";

@Component({
	selector: "app-hello-world",
	templateUrl: "./hello-world.component.html",
	styleUrls: ["./hello-world.component.scss"],
})
export class HelloWorldComponent implements OnInit, UniversalComponent {
	@Input() helloTemplate?: TemplateRef<any>;
	@Input() data: any;

	constructor() {}

	ngOnInit(): void {}
}
