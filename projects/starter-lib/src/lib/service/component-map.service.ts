import { ComponentMap } from "./../model/component-map";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ComponentMapService {
	public componentMap = new ComponentMap();
	public hasMap: boolean = false;
	constructor() {}
	public getKey(key: string): any {
		if (!this.componentMap[key]) {
			throw new Error(`${key} does not exist in componentMap`);
		}
		return this.componentMap[key];
	}
}
