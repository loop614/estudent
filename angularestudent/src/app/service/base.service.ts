import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable()
export class BaseService {
    readonly baseUrl: string = 'http://localhost:8000/';
    readonly estudentUserStorageKey = 'estudent_user';
    readonly estudentAccessTokenStorageKey = 'estudent_refresh_token';
    readonly estudentRefreshTokenStorageKey = 'estudent_access_token';

    jsonOptions: any;

    constructor(protected http: HttpClient, protected router: Router) {
        this.jsonOptions = {
            responseType: 'json/text',
            headers: new HttpHeaders(),
        };
    }

    public isTokenValid(): boolean {
        // let token = this.getTokenStorage();
        // if (token === null || this.isTokenExpired(String(token))) {
        //     this.clearTokenStorage();
        //     return false;
        // }
        return true;
    }

    public setTokenStorage(user: User): void {
        localStorage.setItem(this.estudentRefreshTokenStorageKey, user.refresh);
        localStorage.setItem(this.estudentAccessTokenStorageKey, user.access);
    }

    public getUserStorage(): User | null {
        let estudentUser = localStorage.getItem(this.estudentUserStorageKey);
        if (estudentUser === null) {
            return null;
        }

        return JSON.parse(String(estudentUser));
    }

    public clearStorage(): void {
        localStorage.removeItem(this.estudentUserStorageKey);
        localStorage.removeItem(this.estudentAccessTokenStorageKey);
        localStorage.removeItem(this.estudentRefreshTokenStorageKey);
    }

    protected handleError(message: string) {
        console.error(message);
    }

    protected setUserStorage(user: User) {
        localStorage.setItem(this.estudentUserStorageKey, JSON.stringify(user));
    }

    private isTokenExpired(token: string): boolean {
        const expiry = JSON.parse(atob(token.split('.')[1])).exp;
        return Math.floor(new Date().getTime() / 1000) >= expiry;
    }
}
