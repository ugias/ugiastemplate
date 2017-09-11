import { Component} from "@angular/core";
import { User } from "../../../models";
import { UserAuthenticationService, CurrentUserService } from "../../../services/shared";

@Component({
    selector: "header-component",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.less"]
})

export class HeaderComponent {
    isError: boolean;
    isAuthenticated: boolean;
    constructor(public userAuthService: UserAuthenticationService, public currentUserService: CurrentUserService) {
        try {
            //this.isAuthenticated = userAuthService.isAuthenticated;
            this.isError = false;
        } catch (e) {
            this.isError = true;
        }
    }

    // public logout() {
    //     this.userAuthService.Logout();
    // }
}