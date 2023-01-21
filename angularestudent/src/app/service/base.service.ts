import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class BaseService {
    readonly baseUrl: string = 'http://localhost:8000/';
    jsonOptions: any;

    constructor(protected http: HttpClient, protected router: Router) {
        this.jsonOptions = { responseType: 'json/text' };
    }


    private getToken(): string {
        let token = this.getTokenStorage();
        if (token === null || this.isTokenExpired(token)) {
            this.clearTokenStorage();
            this.router.navigateByUrl('/login')
        }

        return String(token);
    }

    public isTokenValid(): boolean {
        let token = this.getTokenStorage();
        if (token === null || this.isTokenExpired(token)) {
            this.clearTokenStorage();
            return false;
        }
        return true;
    }

    public setTokenStorage(token: string): void {
        localStorage.setItem('estudent_token', token);
    }

    public getTokenStorage(): string | null {
        return localStorage.getItem('estudent_token');
    }

    private clearTokenStorage(): void {
        return localStorage.removeItem('estudent_token');
    }

    private isTokenExpired(token: string): boolean {
        const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
        return (Math.floor((new Date).getTime() / 1000)) >= expiry;
    }
}
