import {Injector} from "@angular/core";

let appInjectorRef: Injector;
export const APP_INJECTOR = (injector?: Injector): Injector => {
    if (injector) {
        appInjectorRef = injector;
    }
    return appInjectorRef;
};