import { Component, EventEmitter, OnInit, Output } from "@angular/core";

@Component({
	selector: "app-buttonbox",
	templateUrl: "./buttonbox.component.html",
	styleUrls: ["./buttonbox.component.scss"]
})
export class ButtonboxComponent implements OnInit {
	@Output() onSave: EventEmitter<null> = new EventEmitter();
	@Output() onCancel: EventEmitter<null> = new EventEmitter();
	constructor() { }

	ngOnInit(): void {
	}

	save():void {
		this.onSave.emit(null);
	}

	cancel():void {
		this.onCancel.emit(null);
	}

}
