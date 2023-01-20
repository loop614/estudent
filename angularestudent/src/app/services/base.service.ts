import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class BaseService {
    readonly baseUrl: string = 'localhost::8080/api/';
    jsonOptions: any;

    constructor(
        protected http: HttpClient
    ) {
        this.jsonOptions = { responseType: 'json/text' };
    }
}
