import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

interface JobForm {
	firstName: FormControl<string | null>;
	lastName: FormControl<string | null>;
}

@Component({
	selector: "app-forms",
	templateUrl: "./forms.component.html",
	styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
	jobForm: FormGroup<JobForm> = this.fb.group({
		firstName: [""],
		lastName: [""],
	});
	preview: string = "";
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		console.log("form firstname", this.jobForm.value.firstName);
	}

	save(): void {
		this.preview = JSON.stringify(this.jobForm.value);
	}
}
