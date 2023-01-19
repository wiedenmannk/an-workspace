import { InputTextComponent } from "./../forms/input-text/input-text.component";
import { InputModel } from "./../model/input-model";
import { componentMap, customMap } from "./../model/cms";
import { City } from "./../ng-template/model/cities";
import { LoopComponent } from "./../ng-template/loop/loop.component";
import { HelloWorldComponent } from "./../ng-template/hello-world/hello-world.component";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AdDirective, ComponentMapService } from "starter-lib";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
	selector: "app-easy-component-loader",
	templateUrl: "./easy-component-loader.component.html",
	styleUrls: ["./easy-component-loader.component.scss"],
})
export class EasyComponentLoaderComponent implements OnInit, OnDestroy {
	@ViewChild(AdDirective, { static: true }) adHost!: AdDirective;
	cities: City[] = [
		{
			name: "London",
			code: "LN",
		},
		{ name: "Berlin", code: "B" },
	];
	myComponent = HelloWorldComponent;
	testForm = new FormGroup<any>([]);
	inputData?: InputModel;
	inputDynamic?: InputModel;
	constructor(private cms: ComponentMapService) {
		this.cms.componentMap = componentMap;
		this.cms.hasMap = true;
		console.log("my component found", this.cms.getKey("HelloWorld"));
		this.addControls();
	}

	ngOnInit(): void {
		this.loadComponent();
	}

	loadComponent(): void {
		const viewContainerRef = this.adHost.viewContainerRef;
		const cName = "instance";
		const instance = LoopComponent;
		console.log("instance", instance);
		console.log("eval cName", eval(cName));
		viewContainerRef.clear();
		const componentRef = viewContainerRef.createComponent(HelloWorldComponent);
		const ref2 = viewContainerRef.createComponent(instance);
		ref2.instance.cities = this.cities;
		console.log("ref", ref2);
		const inputText = "inputText";
		const inputTextComponentType = customMap.get(inputText);
		const label = "asInstance";
		this.testForm.addControl(
			label,
			new FormControl(null, [Validators.required])
		);
		const control = this.testForm.controls[label] as FormControl;
		const inputTextModel: InputModel = {
			label: label,
			formControl: control,
		};
		if (inputTextComponentType) {
			const inputTextComponentRef = viewContainerRef.createComponent(
				inputTextComponentType
			);
			const inputTextComponent = inputTextComponentRef.instance;
			inputTextComponent.data = inputTextModel;
		}
	}

	ngOnDestroy(): void {}

	checkForm(): void {
		console.log("Form", this.testForm);
	}

	private addControls(): void {
		this.testForm.addControl(
			"test",
			new FormControl(null, [Validators.required])
		);
		this.testForm.addControl("dynamic", new FormControl(null, []));
		this.inputData = {
			formControl: this.testForm.controls["test"] as FormControl,
			label: "test",
		};
		this.inputDynamic = {
			formControl: this.testForm.controls["dynamic"] as FormControl,
			label: "dynamic",
		};

		console.log("inputData", this.inputData);
		console.log("inputDynamic", this.inputDynamic);
	}
}
