import { Component, OnInit } from "@angular/core";
import { Subject } from "rxjs";

class Msg {
	private name = "Klaus";
	public reciever?: Subject<any>;

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

	setReciever(r: Subject<any>): void {
		this.reciever = r;
	}

	sendName(): void {
		if (this.reciever) {
			this.reciever.next("mein Name ist " + this.name);
		}
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
	reciever = new Subject<any>();

	constructor() {}

	ngOnInit(): void {
		console.log("class test");
		this.reciever.subscribe((r) => {
			console.log("ich höre zu");
			console.log("ich empfange r", r);
		});
		this.msg.setReciever(this.reciever);
		this.msg.sendMsg("Hello");
		this.callFn(this.msg.sendMsg, "Genial");
		this.msg.sendMsgName("Hello");
		this.callFn(this.msg.sendMsgName, "Mach mal was");
		this.callObject(this.msg, "Jetzt aber");
		this.reciever.next("halllllloooooooooooooooooo");
		if (this.msg.reciever) {
			this.msg.reciever.next("von msg class");
			this.msg.reciever.next({
				action: "add",
				object: {
					id: "10",
					text: "Hello World",
				},
			});
			this.msg.sendName();
		}
	}

	callFn(fn: Function, param: any): void {
		console.log("my Function", fn);
		fn(param);
	}

	callObject(ob: any, param: any): void {
		ob.sendMsgName(param);
	}
}
