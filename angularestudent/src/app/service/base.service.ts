import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/User';

@Injectable()
export class BaseService {
    readonly baseUrl: string = 'http://localhost:8000/';
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
        localStorage.setItem('estudent_refresh_token', user.refresh);
        localStorage.setItem('estudent_access_token', user.access);
    }

    protected handleError(message: string) {
        console.error(message);
    }

    protected setUserStorage(user: User) {
        localStorage.setItem('estudent_user', JSON.stringify(user));
    }

    public getTokenStorage(): string | null {
        return localStorage.getItem('estudent_access_token');
    }

    private clearTokenStorage(): void {
        return localStorage.removeItem('estudent_token');
    }

    private isTokenExpired(token: string): boolean {
        const expiry = JSON.parse(atob(token.split('.')[1])).exp;
        return Math.floor(new Date().getTime() / 1000) >= expiry;
    }
}
