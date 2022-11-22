import { Router } from "@angular/router";
import { Component, Input } from "@angular/core";
import { menu, MenuItem } from "@appmodel/menu";

@Component({
	selector: "ma-menu-content",
	templateUrl: "./menu-content.component.html",
	styleUrls: ["./menu-content.component.scss"],
})
export class MenuContentComponent {
	public menuItems = menu;
	selectedId: string | undefined;
	selectClass = "selected";
	@Input() title?: string;
	constructor(private router: Router) {}

	public selectItem(id: string): void {
		const newItem = document.getElementById(id) as HTMLElement;
		if (this.selectedId) {
			const oldItem = document.getElementById(this.selectedId);
			if (oldItem) {
				oldItem.classList.remove(this.selectClass);
			}
		}

		newItem?.classList.add(this.selectClass);
		this.selectedId = id;
	}

	public selectAndNavigate(id: string, menuItem: MenuItem): void {
		this.selectItem(id);
		if (menuItem.link) {
			this.router.navigateByUrl(menuItem.link);
		}
		if (menuItem.subMenu && menuItem.subMenu.length > 0) {
			const menu = document.getElementById("sub" + id) as HTMLElement;
			if (menu.classList.contains("menu-start")) {
				menu.classList.remove("menu-start");
				menu.classList.add("menu-end");
			} else {
				menu.classList.remove("menu-end");
				menu.classList.add("menu-start");
			}
		}
		this.toggleMenuItem(id);
	}

	private toggleMenuItem(id: string): void {
		const icon = document.getElementById("icon-" + id) as HTMLElement;
		const iRight = "pi-angle-right";
		const iDown = "pi-angle-down";
		if (icon) {
			if (icon.classList.contains(iRight)) {
				icon.classList.remove(iRight);
				icon.classList.add(iDown);
			} else {
				icon.classList.remove(iDown);
				icon.classList.add(iRight);
			}
		}
	}
}
