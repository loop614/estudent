import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class BaseService {
    readonly baseUrl: string = 'http://localhost:8000/';
    jsonOptions: any;

    constructor(
        protected http: HttpClient,
        protected router: Router
    ) {
        this.jsonOptions = { responseType: 'json/text' };
    }

    setTokenCookie(): void {
    }

    getTokenCookie(): string {
        return '';
    }
}
