import { GenericComponent, UniversalComponent } from "starter-lib";
import { Component, OnInit, Input } from "@angular/core";
import { InputModel } from "@demo/model/input-model";

@Component({
	selector: "app-input-text",
	templateUrl: "./input-text.component.html",
	styleUrls: ["./input-text.component.scss"],
})
export class InputTextComponent
	extends GenericComponent
	implements OnInit, UniversalComponent
{
	errors: string[] = [];
	constructor() {
		super();
	}

	ngOnInit(): void {
		console.log("I am component", this);
		console.log("data", this.data);
		if (this.data) {
			const data = this.data as InputModel;
			if (!data.formControl) {
				this.errors.push("FormControl ist nicht gesetzt");
			}
			if (!data.label) {
				this.errors.push("label ist nicht gesetzt");
			}
		} else {
			this.errors.push("Parameter data ist nicht vorhanden");
		}
		if (this.errors.length > 0) {
			console.error("errors", this.errors);
		}
	}
}
