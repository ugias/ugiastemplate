import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
import { Headers, RequestOptions, Response } from "@angular/http";
import { CONFIGURATION } from "../../app.constants";
// import { Token } from "../../models/token";
import { Observable } from "rxjs/Observable";
import { HttpDataService } from "./httpData.service";
import { CurrentUserService } from "./currentUser.service";
import { Router, CanActivate } from "@angular/router";
import { User } from "../../models";

@Injectable()
export class UserAuthenticationService implements CanActivate {

    constructor(private http: HttpDataService,
        private currentUserService: CurrentUserService,
        private router: Router) { }

    // get isAuthenticated(): boolean {
    //     if (!this.currentUserService.token) {
    //         return false;
    //     }
    //     return true;
    // }

    // public Login(username: string, password: string): Observable<Token> {
    //     let body = "grant_type=password&username=" + username + "&password=" + password + "&externalOrganisationId=''",
    //         options = new RequestOptions({ headers: new Headers({ "Content-Type": "application/x-www-form-urlencoded" }) });

    //     return Observable.create((observer) => {
    //         this.http.post(CONFIGURATION.baseUrls.server + "token", body, options)
    //             .map(response => <Token>response.json())
    //             .subscribe((tokenData) => {
    //                 this.currentUserService.token = tokenData;
    //                 observer.next(tokenData);
    //             }, (error) => observer.error(error),
    //             () => observer.complete());

    //     });
    // }

    // public ResetAccessToken(externalOrganisationId: string): Observable<Token> {
    //     if (!this.isAuthenticated) return null;
    //     let body = `grant_type=refresh_token&refresh_token=${this.currentUserService.token.refresh_token}&externalOrganisationId=${externalOrganisationId}`;
    //     let options = new RequestOptions({
    //         headers: new Headers({
    //             "Content-Type": "application/x-www-form-urlencoded" })
    //         });

    //     return Observable.create((observer) => {
    //         this.http.post(CONFIGURATION.baseUrls.server + "token", body, options)
    //             .map(response => <Token>response.json())
    //             .subscribe((tokenData) => {
    //                 this.currentUserService.token = tokenData;
    //                 observer.next(tokenData);
    //             }, (error) => observer.error(error),
    //             () => observer.complete());

    //     });
    // }

    // public Logout() {
    //     this.currentUserService.token = null;
    //     this.currentUserService.userInfo = null;
    //     this.router.navigate(["/login"]);
    // }

    public canActivate() {
        //return this.isAuthenticated;
        return true;
    }
}

