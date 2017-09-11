import { Component, HostListener, OnDestroy } from "@angular/core";
import { UserAuthenticationService } from "./services/shared/userAuthentication.service";
import { Location } from "@angular/common";
@Component({
  selector: "netid-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.less"]
})

export class AppComponent implements OnDestroy {

  constructor(public userAuthenticationService: UserAuthenticationService, location: Location) {
  }

  ngOnDestroy() {
  }
}