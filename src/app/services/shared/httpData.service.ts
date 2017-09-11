import { Injectable } from "@angular/core";
import { Http, RequestOptionsArgs, Response, Headers, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { CurrentUserService } from "./currentUser.service";

@Injectable()
export class HttpDataService {
    constructor(private httpData: Http, private currentUserService: CurrentUserService) {    }

    public get = (url: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.httpData.get(url, options);
    };

    public post = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.httpData.post(url, body, options);
    };

    public put = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.httpData.put(url, body, options);
    }

    public delete = (url: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.httpData.delete(url, options);
    }

    public patch = (url: string, body: string, options?: RequestOptionsArgs): Observable<Response> => {
        options = this.prepareOptions(options);
        return this.httpData.patch(url, body, options);
    }

    private prepareOptions(options: RequestOptionsArgs): RequestOptionsArgs {
        //let token = this.currentUserService.token;
        options = options || {};

        if (!options.headers) {
            options.headers = new Headers();
        }
        // if (token) {
        //     options.headers.append("Authorization", "Bearer " + token.access_token);
        // }

        options.headers.append("Content-Type", "application/json");
        options.headers.append("Accept", "application/json");

        return options;
    }

    private prepareHeaders(): Headers {
        let headers = new Headers();
        //let token = this.currentUserService.token;

        // if (token) {
        //     headers.append("Authorization", "Bearer " + token.access_token);
        // }

        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");

        return headers;
    }
}