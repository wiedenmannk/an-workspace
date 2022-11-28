import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
	selector: "app-forms",
	templateUrl: "./forms.component.html",
	styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
	jobForm = new FormGroup({
		firstName: new FormControl(""),
		lastName: new FormControl(""),
	});
	preview: string = "";
	constructor() {}

	ngOnInit(): void {}

	save(): void {
		this.preview = JSON.stringify(this.jobForm.value);
	}
}
