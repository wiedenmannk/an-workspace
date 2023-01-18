import { componentMap } from "./../model/cms";
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
	inputData: any = {};
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
		this.inputData.formControl = this.testForm.controls["test"];
		console.log("inputData", this.inputData);
	}
}
