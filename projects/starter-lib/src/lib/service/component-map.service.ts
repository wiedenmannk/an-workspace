import { ComponentMap } from "./../model/component-map";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: "root",
})
export class ComponentMapService {
	public componentMap = new ComponentMap();
	public hasMap: boolean = false;
	constructor() {}
}
