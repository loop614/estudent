export class RegisterUser {
    first_name: string = '';
    last_name: string = '';
    username: string = '';
    email: string = '';
    password: string = '';
    password_confirm: string = '';

    constructor(
        username: string,
        email: string,
        password: string,
        passwordConfirm: string,
        first_name: string = '',
        last_name: string = '',
    ) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.password_confirm = passwordConfirm;
        this.first_name = first_name;
        this.last_name = last_name;
    }
}
