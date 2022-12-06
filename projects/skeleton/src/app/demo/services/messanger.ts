import { Message } from "primeng//api";
import { Subject } from "rxjs";
class Messagner {
	public $msg = new Subject<Message>();
	constructor() {}
}
export const messagner = new Messagner();
