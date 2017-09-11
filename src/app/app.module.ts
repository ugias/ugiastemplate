import { NgModule, ComponentRef, enableProdMode, } from "@angular/core";
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule, JsonpModule } from "@angular/http";
import { RegistrationModule }
from "./modules";
import { AppComponent } from "./app.component";
import { APPROUTING } from "./app.routes";
import { AboutComponent } from "./components/about";
import { ErrorComponent } from "./components/error";
import { HeaderComponent, FooterComponent } from "./components/shared";
import { HttpDataService, StorageService, CurrentUserService, UserAuthenticationService, APP_INJECTOR } from "./services/shared";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RegistrationModule,
    APPROUTING
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    ErrorComponent
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: "/" },
    HttpDataService,
    CurrentUserService,
    StorageService,
    UserAuthenticationService
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
