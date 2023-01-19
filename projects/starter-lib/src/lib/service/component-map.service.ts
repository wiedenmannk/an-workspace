import { UniversalComponent } from "../model/generics";
import { ComponentMap } from "./../model/component-map";
import { Injectable, Type } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ComponentMapService {
	public componentMap = new ComponentMap();
	public hasMap: boolean = false;
	constructor() {}
	public getKey(key: string): Type<UniversalComponent> {
		if (!this.componentMap[key]) {
			throw new Error(`${key} does not exist in componentMap`);
		}
		return this.componentMap[key];
	}
}
