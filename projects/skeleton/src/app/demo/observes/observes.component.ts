import { Component, OnInit } from "@angular/core";
import { interval, of, take, map } from "rxjs";
import { Message } from "primeng//api";
import { messagner } from "../services/messanger";

@Component({
	selector: "app-observes",
	templateUrl: "./observes.component.html",
	styleUrls: ["./observes.component.scss"],
})
export class ObservesComponent implements OnInit {
	msg: any = "Observe this";
	messages: Message[] = [];
	$messages = messagner.$msg;
	constructor() {
	}

	ngOnInit(): void {
		const progress = [
			{ name: "Brian" }, [1, 2, 3], function hello(): void{}
		];
		const source = interval(1000).pipe(
			take(progress.length),
			map((i)=> {
				console.log("i", i);
				return progress[i];
			}));
		//output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
		console.log("start of interval");
		const subscribe = source.subscribe((val) => {
			console.log("next interval");
			console.log("interval data",val);
		});

		this.runPromise();

		this.listenMessages();
		this.addMessage({severity:"info", summary:"Info Message", detail:"PrimeNG rocks"});
	}

	private async runPromise(): Promise<void> {
		console.log("end of interval");
		console.log("start2");
		const x = await this.getPromiseData();
		this.getPromiseData().then(x => {
			console.log("then is x", x);
		});
		console.log("await x", x);
		console.log("end2");
		console.log("start3 timed promise");
		const myTime = await this.timedPromise();
		console.log("wait 1 sek for", myTime);
		console.log("end3 timed promise");
	}

	private async getPromiseData(): Promise<any> {
		const source = of({title: "Hello World"});
		return source.toPromise();
	}

	private async timedPromise(): Promise<any> {
		const data = {money: "1.000 Euro"};
		const source = interval(1000).pipe(take(1), map((x)=>{
			console.log("x",x);
			return data;
		}));
		return source.toPromise();
	}

	save(): void {
		console.log("save");
		this.msg = "you clicked save";
	}

	cancel(): void {
		console.log("cancel");
		this.msg = "you clicked cancel";
	}

	addMessage(msg: Message): void {
		this.$messages.next(msg);
	}

	private listenMessages(): void {
		this.$messages.subscribe((msg)=>{
			console.log("incoming msg", msg);
			this.messages.push(msg);
		});
	}


}
