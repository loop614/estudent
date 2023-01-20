export class User
{
    constructor(email: string, name:string, password: string) {
        this.email = email;
        this.name = name;
        this.password = password;
    }

    email: string = '';
    name: string = '';
    password: string = '';
}
