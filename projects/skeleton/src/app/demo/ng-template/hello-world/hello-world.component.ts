import { Component, Input, OnInit, TemplateRef } from "@angular/core";

@Component({
	selector: "app-hello-world",
	templateUrl: "./hello-world.component.html",
	styleUrls: ["./hello-world.component.scss"],
})
export class HelloWorldComponent implements OnInit {
	@Input() helloTemplate?: TemplateRef<any>;

	constructor() {}

	ngOnInit(): void {}
}
