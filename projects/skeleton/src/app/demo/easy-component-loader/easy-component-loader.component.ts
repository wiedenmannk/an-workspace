import { City } from "./../ng-template/model/cities";
import { LoopComponent } from "./../ng-template/loop/loop.component";
import { HelloWorldComponent } from "./../ng-template/hello-world/hello-world.component";
import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { AdDirective, AdComponentDirective } from "starter-lib";

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
	constructor() {}

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
}
