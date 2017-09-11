import { Injectable } from "@angular/core";
import { Headers, RequestOptions, Response } from "@angular/http";
import { CONFIGURATION } from "../../app.constants";
import { Observable } from "rxjs/Observable";
import { HttpDataService } from "./httpData.service";

@Injectable()
export class CommonDataService {

    constructor(private httpData: HttpDataService) { }

}

