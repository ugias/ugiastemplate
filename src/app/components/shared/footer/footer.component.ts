import { Component } from "@angular/core";
import { UserAuthenticationService } from  "../../../services/shared/userAuthentication.service";

@Component({
    selector: "footer-component",
    templateUrl: "./footer.component.html",
    styleUrls: ["./footer.component.less"]
})

export class FooterComponent {
    version: string;
    constructor(public userAuthService: UserAuthenticationService) {
        this.version  = "1.0.0";
    }

    // public logout() {
    //     this.userAuthService.Logout();
    // }
} 