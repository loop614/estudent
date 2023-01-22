export class User {
    idUser: number = 0;
    refresh: string = '';
    access: string = '';
    email: string = '';
    username: string = '';
    isSuperUser: boolean = false;

    constructor(
        idUser: number,
        refresh: string,
        access: string,
        email: string,
        username: string,
        isSuperUser: boolean,
    ) {
        this.idUser = idUser;
        this.refresh = refresh;
        this.access = access;
        this.email = email;
        this.username = username;
        this.isSuperUser = isSuperUser;
    }
}
