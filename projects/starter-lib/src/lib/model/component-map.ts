import { UniversalComponent } from "./generics";
import { Type } from "@angular/core";

export class ComponentMap {
	[key: string]: Type<UniversalComponent>;
}
