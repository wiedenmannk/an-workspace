import { Component, OnInit } from "@angular/core";
import {
	FormBuilder,
	FormControl,
	FormGroup,
	Validators,
} from "@angular/forms";
import { createPasswordStrengthValidator } from "@demo/validator/password-validator";

interface JobForm {
	firstName: FormControl<null | string>;
	lastName: FormControl<null | string>;
	password: FormControl<null | string>;
}

@Component({
	selector: "app-forms",
	templateUrl: "./forms.component.html",
	styleUrls: ["./forms.component.scss"],
})
export class FormsComponent implements OnInit {
	jobFormx: FormGroup<JobForm> = this.fb.group({
		firstName: ["", Validators.required],
		lastName: [""],
		password: ["", [Validators.required, createPasswordStrengthValidator()]],
	});

	jobForm: FormGroup<JobForm> = this.fb.group({
		firstName: this.fb.control<string | null>(null, {
			validators: [Validators.required],
		}),
		lastName: this.fb.control<string | null>(null),
		password: this.fb.control<string | null>(null, {
			validators: [Validators.required, createPasswordStrengthValidator()],
		}),
	});
	externalData = { lastName: "Wiedenmann" };
	preview: string = "";
	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.jobForm.patchValue(this.externalData);
		this.logForm();
	}

	logForm(): void {
		console.log("form firstname", this.jobForm.value.firstName);
		console.log("controls firstname", this.jobForm.controls.firstName);
		console.log("form", this.jobForm);
	}

	save(): void {
		this.preview = JSON.stringify(this.jobForm.value);
		this.logForm();
	}
}
