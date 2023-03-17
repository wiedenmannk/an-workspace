import { Component, OnInit } from "@angular/core";

class Msg {
	name = "Klaus";

	sendMsg(msg: string): void {
		console.log("msg", msg);
	}

	sendMsgName(msg: string): void {
		console.log("msg", msg);
		console.log("(class Msg) this", this);
		let myName = this?.name;
		const msgName = `${msg} ${myName}`;
		console.log("msg and name", msgName);
	}
}

@Component({
	selector: "app-playground",
	templateUrl: "./playground.component.html",
	styleUrls: ["./playground.component.scss"],
})
export class PlaygroundComponent implements OnInit {
	message: string = "welcome";
	msg = new Msg();

	constructor() {}

	ngOnInit(): void {
		this.callFn(this.msg.sendMsg, "test");
		console.log("call directly");
		this.msg.sendMsgName("Hello");
		console.log("callback");
		this.callFn(this.msg.sendMsgName, "Greetings");
	}

	callFn(fn: Function, param: any): void {
		console.log("call function", fn);
		fn(param);
	}
}
