import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Subject } from "rxjs";

@Component({
	selector: "app-inject-reciever",
	templateUrl: "./inject-reciever.component.html",
	styleUrls: ["./inject-reciever.component.scss"],
})
export class InjectRecieverComponent implements OnInit {
	@Input() dataModel!: any[];
	@Input() template!: TemplateRef<any>;
	@Input() reciever?: Subject<any>;

	constructor() {}

	ngOnInit(): void {}

	send(event: any): void {
		if (this.reciever) {
			this.reciever.next(event);
		} else {
			console.error(
				"cannot send data, because no reciever exist, need property reciever"
			);
		}
	}
}
