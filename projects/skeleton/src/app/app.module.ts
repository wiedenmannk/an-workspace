import { StarterLibModule } from "starter-lib";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MainModule } from "@modules/main/main.module";
import { DefaultLayoutComponent } from "./layout/default-layout/default-layout.component";
import { MenuComponent } from "./layout/menu/menu.component";
import { RouterModule } from "@angular/router";
import { MenuContentComponent } from "./layout/menu/menu-content/menu-content.component";
import { NotFoundComponent } from "./not-found/not-found.component";

/*
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
*/

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
	declarations: [
		AppComponent,
		DefaultLayoutComponent,
		MenuComponent,
		MenuContentComponent,
		NotFoundComponent,
	],
	imports: [
		BrowserModule,
		CommonModule,
		BrowserAnimationsModule,
		RouterModule,
		AppRoutingModule,
		HttpClientModule,
		MainModule,
		StarterLibModule,
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
