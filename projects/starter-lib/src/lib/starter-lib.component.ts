import { Component, OnInit } from "@angular/core";

@Component({
	selector: "lib-starter-lib",
	template: `
		<content-layout
			><p class="welcome">Welcome to Starter Lib</p></content-layout
		>
	`,
	styles: [],
})
export class StarterLibComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
