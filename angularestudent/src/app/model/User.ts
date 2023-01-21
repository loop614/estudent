export class User {
    idUser: number = 0;
    email: string = '';
    name: string = '';
    isSuperUser: boolean = false;

    constructor(idUser: number, email: string, name: string, isSuperUser: boolean)
    {
        this.idUser = idUser;
        this.email = email;
        this.name = name;
        this.isSuperUser = isSuperUser;
    }
}
