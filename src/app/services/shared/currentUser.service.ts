import { Injectable } from "@angular/core";
import { StorageService } from "./storage.service";
// import { Token } from "../../models";

@Injectable()
export class CurrentUserService {

    constructor(private storageService: StorageService) { }

    // public get token(): Token {
    //     let token = this.storageService.getItem("auth");

    //     return token;
    // }
}
