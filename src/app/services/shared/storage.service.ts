import { Injectable } from "@angular/core";

@Injectable()
export class StorageService {
    private _storage: Storage;

    constructor() {
        try {
            this._storage = localStorage;
        } catch (e) {}

        try {
            if (!this._storage) this._storage = sessionStorage;
        } catch (e) {}
    }

    public setItem = (key: string, value: any): void => {
        this._storage.setItem(key, JSON.stringify(value));
    };

    public removeItem = (key: string): void => {
        this._storage.removeItem(key);
    };

    public getItem = (key: string): any => {
        let item: any = this._storage.getItem(key);

        if (item && item !== "undefined" && item !== null) {
            return JSON.parse(this._storage.getItem(key));
        }

        return null;
    };
}