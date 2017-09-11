import { Component } from "@angular/core";

@Component({
    selector: "error-component",
    templateUrl: "./error.component.html"
})

export class ErrorComponent {
    errorMessage: string;
    constructor() {
        this.errorMessage = "";
     }

    public ngOnInit() { }
}