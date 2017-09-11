import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response } from "@angular/http";
import { CONFIGURATION } from "../../app.constants";
import { User } from "../../models";
import { Observable } from "rxjs/Observable";
import { HttpDataService } from "../../services/shared";

@Injectable()
export class RegistrationService {

    constructor(private httpData: HttpDataService) { }

    public Save(user: User): Observable<User> {
        return Observable.create((observer: any) => {
            this.httpData.post(CONFIGURATION.baseUrls.apiUrl + "account", JSON.stringify(user))
                .map(response => <User>response.json())
                .subscribe((userData) => {
                    observer.next(userData);
                }, (error) => observer.error(error),
                () => observer.complete());
        });
    }

    // public GetSecretQuestions(): Observable<SecretQuestion[]> {
    //     return Observable.create((observer) => {
    //         this.httpData.get(CONFIGURATION.baseUrls.apiUrl + "common/getsecretquestions")
    //             .map(response => <SecretQuestion[]>response.json().result)
    //             .subscribe((userData) => {
    //                 observer.next(userData);
    //             }, (error) => observer.error(error),
    //             () => observer.complete());
    //     });
    // }

}
