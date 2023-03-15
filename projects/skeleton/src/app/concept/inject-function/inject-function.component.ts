import {
	Component,
	OnInit,
	Input,
	Output,
	TemplateRef,
	EventEmitter,
} from "@angular/core";

@Component({
	selector: "app-inject-function",
	templateUrl: "./inject-function.component.html",
	styleUrls: ["./inject-function.component.scss"],
})
export class InjectFunctionComponent implements OnInit {
	@Input() dataModel!: any[];
	@Input() template!: TemplateRef<any>;
	@Output() doAction = new EventEmitter<any>();
	constructor() {}

	ngOnInit(): void {}

	action(item: any): void {
		this.doAction.emit(item);
	}
}
