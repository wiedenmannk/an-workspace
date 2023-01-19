import { Type } from "@angular/core";
import {
	GenericComponent,
	UniversalComponent,
} from "./../../../../../starter-lib/src/lib/model/generics";
import { InputTextComponent } from "./../forms/input-text/input-text.component";
import { HelloWorldComponent } from "./../ng-template/hello-world/hello-world.component";
import { ComponentMap } from "starter-lib";
export const componentMap: ComponentMap = new ComponentMap();
componentMap["HelloWorld"] = HelloWorldComponent;
componentMap["inputText"] = InputTextComponent;

export const customMap = new Map<string, Type<GenericComponent>>();
customMap.set("inputText", InputTextComponent);
